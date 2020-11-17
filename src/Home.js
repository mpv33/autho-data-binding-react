import React from 'react';
import './App.css';
import Iframe from 'react-iframe'
import  NavigationBar  from './components/NavigationBar';

const Home = (props) => (
 <div className='App' >
  <NavigationBar />  
  <div className='view1'>
        {props.data}
  </div>
      

      
       
 </div>
)

export default Home;