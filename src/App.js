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
       
         
        <Route path="/"  exact strict component={Home} />
        <Route path="/login" exact strict component={User} />
        <NavigationBar />

        
      </Router>
  
  );
}

export default App;
