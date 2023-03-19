// import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Dlmode from './components/Dlmode';
// import { useState, useEffect } from 'react';
import Alert from './components/Alert';
import Contact from './components/Contact';

import React, {useState} from 'react'

// import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function App() {
  const [mode, setMode] = useState('light');

  const [enableMode, setenableMode] = useState('Enable Dark Mode');

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg : message,
      type : type,
    })

    setTimeout(()=>{
      setAlert(null);
    },2000);
  }


  const toggleMode = () =>{
    if(mode === 'light' || mode=== "primary" || mode === "success" || mode === "warning" || mode === "danger")
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode", "success");
      document.title = "Dark mode";
      setInterval(()=>{
        document.title = "Dark mode";
      }, 2000)
      setInterval(() => {
        document.title = "install- text converter";
      }, 1500);

      setenableMode("Enable Light Mode");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode", "success");
      document.title = "Dark mode";
      setenableMode("Enable Dark Mode");
    }
    // else
    // {
    //   setMode('light');
    // }
  }

  const toggleMode01 = () =>{
    if(mode === 'light' || mode==="dark" || mode==="warning" || mode === "success" || mode === "danger")
    {
      setMode('primary');
      document.body.style.backgroundColor = 'blue';
    }
    // else
    // {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    // }
  }

  const toggleMode02 = () =>{
    if(mode === 'light' || mode==="dark" || mode==="primary" || mode === "success" || mode === "danger")
    {
      setMode('warning');
      document.body.style.backgroundColor = 'yellow';
    }
    // else
    // {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    // }
  }

  const toggleMode03 = () =>{
    if(mode === 'light' || mode==="dark" || mode==="primary" || mode === "success" || mode === "warning")
    {
      setMode('danger');
      document.body.style.backgroundColor = 'red';
    }
    // else
    // {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    // }
  }

  const toggleMode04 = () =>{
    if(mode === 'light' || mode==="dark" || mode==="primary" || mode === "warning" || mode === "danger")
    {
      setMode('success');
      document.body.style.backgroundColor = 'green';
    }
    // else
    // {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    // }
  }


  return (
    <>
    <Router>
    <Nav title = 'Navbar' mode={mode} enableMode={enableMode} toggleMode={toggleMode} toggleMode01={toggleMode01} toggleMode02={toggleMode02} toggleMode03={toggleMode03} toggleMode04={toggleMode04}/>
    <Alert alert={alert}/>
  
    <Routes>
          <Route path="/Dlmode" element={<Dlmode/>}/>
          <Route path="/" element={<Form heading ="Enter your data" mode={mode} showAlert={showAlert}/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          </Routes>
          </Router>
   
    </>
  );
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
// export default App;


// function App() {
//   const [color, setColor] = useState("blue")
//   const  click = color => {
//     setColor(color)
//   }

//   useEffect (() => {
//     document.body.style.backgroundColor = color
//   },[color])

//   return (
//     <>
//     <Nav title = 'Hello'/>
//     <div className="mb-3">
//     <Form heading = "Enter your data"/>
//     {/* <Form heading1 = "Word Counter"/> */}
//     </div>
   
//     <div className = 'App'>
//       <button onClick = {
//         () => click("yellow")
//       }>yellow</button>

//      <button onClick = {
//         () => click("grey")
//       }>grey</button>


//     </div>
//     </>
//   )
// }
// export default App;