import React from 'react';
import { NavLink, withRouter } from 'react-router-dom'
import '../css/style.css';

function header({ history }) {
  const logout = () => {
    localStorage.removeItem("token")
    history.push("/login")
  }
  return (
    <div className="header">
        <div className="main-header">
         <a href = "#" className="logo">AMS</a>
         <a href = "#" className="logout" onClick={logout}>Logout</a>
        </div>
        <div className="secondary-header">
         <NavLink to = "/file-upload" className="secondary-value">Upload Assignment</NavLink>
         <NavLink to = "/compare-history" className="secondary-value">Compare History</NavLink>
        </div>
    </div>
  );
}


export default withRouter(header);