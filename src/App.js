import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  NavigationBar  from './components/NavigationBar';
import { User } from './components/User';
import Home  from './Home';
import { NoMatch } from './NoMatch';



function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />

       

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={User} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
