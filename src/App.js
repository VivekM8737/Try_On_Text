import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [myStyle, setStyle] = useState({
    backgroudColor: 'white',
    color: 'black'
  })
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }
  const handaleInvertbag = () => {
    if (myStyle.backgroundColor !== 'black') {
      setStyle({
        backgroundColor: 'black',
        color: 'white'
      })
      document.body.style.backgroundColor = 'black'
      // you can also change the backgroud of body..
      setMode('bg-black')
      showAlert("Successfully", "Enable_Dark_Mode")
      document.body.style.color='white'

    }
    else {
      setStyle({
        backgroundColor: 'white',
        color: 'black'
      })
      document.body.style.backgroundColor = 'white'
      document.body.style.color='black'

      setMode('bg1')
      showAlert("Success", "Enable_Light_Mode")
    }
  }
  const [mode, setMode] = useState('bg1')
  return (
    <>
      <Router>
        <div style={myStyle}>
          <Navbar title="Try_to_Convert" bgchange={handaleInvertbag} />
          </div>
          <div className='ht'>
          <Alert alert={alert} />
        </div>
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<div className=''>
            <TextForm heading="Enter the text" showAlert={showAlert} />
          </div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
