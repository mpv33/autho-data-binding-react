import React from 'react';
import { Component } from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import Home from '../Home';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
class NavigationBar extends Component{
  state={
    data:'',
    username:'UserName'
  }
  
changebyinput = (a) => {
  //const local = this.state.love=a.target.value
  this.setState({
    data: a.target.value
  })
}
changebyname = (a) => {
  //const local = this.state.love=a.target.value
  this.setState({
    username: a.target.value
  })
}
  render(){
    return(
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">UserName</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Form className="form-center">
          <FormControl type="text" placeholder="Enter data  " className="input-box" onChange={this.changebyinput} value={this.state.data} />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           
            <Nav.Item><Nav.Link href="/login" >Login</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Home data={this.state.data}/>
    </Styles>
    )
    
  }
}

export default NavigationBar ;




