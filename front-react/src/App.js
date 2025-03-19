import React from 'react'; // Move this import to the top
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";  
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App () {
  return (
    <Router>
      <ToastContainer />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
