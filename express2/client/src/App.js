import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component"
import CenterList from "./components/center-list.component";
import EditCenter from "./components/edit-center.component";
import CreateCenter from "./components/create-center.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={CenterList} />
      <Route path="/edit/:id" component={EditCenter} />
      <Route path="/create" component={CreateCenter} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router> 
  );
}

export default App;
