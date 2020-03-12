import React, { Component } from 'react';
import '../css/style.css';
import axios from 'axios';

class table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tabledata: null
    }
  }


    componentDidMount() {
      axios.get('https://ebda89d8-30fd-4c7e-bdb1-6d980a3bb3aa.mock.pstmn.io/v1/Assignment/Compare/Histories')
        .then(res => {
          console.log(res.data)
          this.setState({ tabledata: res.data})
        })
    }

  render() {


    return (
      <div className="table-section" >
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Name</th>
            <th>Result</th>
            <th>Comment</th>

          </tr>
        </thead>
        <tbody>
        {!this.state.tabledata && (
          <tr>
            <td>Loading</td>
          </tr>
        )}
        {this.state.tabledata && this.state.tabledata.data.map(item =>(

          <tr key={item.id}>
          <td>{item.firstStudentName}</td>
          <td>{item.secondStudentName}</td>
          <td>{item.percentSimilar}%</td>
          <td>{item.similarText}</td>

        </tr>
        ) )}
      </tbody>
     
     

        
      </table>
      </div>
    );
  }
}




export default table;