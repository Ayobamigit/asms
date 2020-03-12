import React from 'react';
import '../css/style.css';
import axios from 'axios';

export default class Compare extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      request: null,
      firstStudentName: "",
      secondStudentName: "",
      firstStudentFile: null,
      secondStudentFile: null,
      result: null
    }
  }

  handleChange = event =>{
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }

  handleFileChange = event => {
    const name = event.target.name
    const files = event.target.files
    this.setState({
      [name]: files && files[0]
    })
  }

  handleSubmit = event =>{
    event.preventDefault()
    this.setState({
      request: "PENDING"
    })

    const fd = new FormData();
    fd.append("firstStudentName", this.state.firstStudentName)
    fd.append("firstStudentFile", this.state.firstStudentFile)
    fd.append("secondStudentName", this.state.secondStudentName)
    fd.append("secondStudentFile", this.state.secondStudentFile)

    axios.post("https://ebda89d8-30fd-4c7e-bdb1-6d980a3bb3aa.mock.pstmn.io/v1/Assignment/Compareresponse", fd)
      .then(res => this.setState({ result: res.data, request: "SUCCESS" }))

  }

  render() {
    return (
      <div className="compare-section">

        <form className="compare-body" onSubmit={this.handleSubmit}>

            <div className="compare-form">
              <div className="compare-name" >
              <label> Student name </label>
              <input onChange={this.handleChange} value={this.state.firstStudentName} className="compare-item" type="text" name="firstStudentName" /><br/>
              </div>

              <div className="compare-file">
              <label> Upload File </label>
              <input onChange={this.handleFileChange} className="upload-item" type="file" name="firstStudentFile" /><br/>
              </div>


              {/* <div className="submit">
                <input className="submitbtn" type="submit" value="Upload" />
              </div> */}

              </div>

              <div className="compare-form">
              <div className="compare-name" >
              <label> Student name </label>
              <input onChange={this.handleChange} className="compare-item" type="text" name="secondStudentName" /><br/>
              </div>

              <div className="compare-file">
              <label> Upload File </label>
              <input onChange={this.handleFileChange} className="upload-item" type="file" name="secondStudentFile" /><br/>
              </div>


              <div className="submit">
                <input className="submitbtn" type="submit" value="Compare" />
              </div>


          </div>

        </form>
        
        {this.state.request!== null &&(
          <div className="result-body">

          {this.state.request === "PENDING" &&(
            <p>Loading</p>
          )}

          {this.state.request === "SUCCESS" &&(
            <React.Fragment>
            <h2>Percentage Similarity: {this.state.result.percentSimilar}%</h2>
            <p>Comment: {this.state.result.similarText}</p>
            </React.Fragment>
            
         )}
             
        </div>
          
        ) }





      </div>
    );
  }
}
