
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light');
  const [backgroundColor,setbackgroundColor]=useState('light');
  const [dtext,setDtext]=useState('Dark Mode');
  
  const toggleModeDark=()=>{
    if(mode==='light')
    {
      setMode('dark');
      setDtext('Light Mode');
    }
    else{
      setMode('light');
      setDtext('Dark Mode');
    }
  }
  const toggleModeBlue=()=>{
    if(mode==='dark')
    {
      
      setDtext('Light Mode');
      setbackgroundColor('#8D60F5 ')
    }
    else{
      
      setDtext('Dark Mode');
      setbackgroundColor('light')
    }
  }
  const toggleModeGreen=()=>{
    if(mode==='dark')
    {
      
      setDtext('Light Mode');
      setbackgroundColor('#4BF334')
    }
    else{
      
      setDtext('Dark Mode');
      setbackgroundColor('light')
    }
  }
  const toggleModePink=()=>{
    if(mode==='dark')
    {
      
      setDtext('Light Mode');
      setbackgroundColor('Pink')
    }
    else{
     
      setDtext('Dark Mode');
      setbackgroundColor('light')
    }
  }
  return (
    <>
      {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleModeDark={toggleModeDark} toggleModeBlue={toggleModeBlue} toggleModePink={toggleModePink} toggleModeGreen={toggleModeGreen} dtext={dtext}/>
      <div className='container'>
{/*       
        <Switch>
          <Route path="/about">
            <About />
          </Route>
         
          <Route path="/"> */}
            <TextForm heading="Enter the text to analyze below" mode={mode} backgroundColor={backgroundColor}  ></TextForm>
           
          {/* </Route>
        </Switch>
         */}
        
       
      </div>  
      {/* </Router> */}
     
    </>
  );
}

export default App;
