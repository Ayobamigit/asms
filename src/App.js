import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css';
import './css/style.css'
import Login from './components/Login'
import Fileupload from './Fileupload';
import History from './History';

const PrivateRoute = ({ component, ...props }) => {
  const Component = component
  return (
    <Route
      {...props}
      render={
        (routeProps) => !!localStorage.getItem("token") ? <Component {...routeProps} /> : <Redirect to="/login" />
      }
    />
  )
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
        
          <Route path="/" exact={true} render={() => !!localStorage.getItem("token") ? <Redirect to="/file-upload" /> : <Redirect to="/login" />} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/file-upload" component={Fileupload} />
          <PrivateRoute path="/compare-history" component={History} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
