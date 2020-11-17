import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import  NavigationBar  from './components/NavigationBar';
import  User  from './components/User';
import Home  from './Home';



function App() {
  return (
      <Router>
        <NavigationBar />
         
          <Route  path="/"  exact component={Home} />
          <Route path="/login" exact component={User} />

        
      </Router>
  
  );
}

export default App;
