import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 
import OurStepper from './stepper.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2>Ally Supplier Overview Questionnaire</h2> 
    <h4>Please fill the following to the best of your knowledge.</h4> 
    <br></br> 
    <br></br> 
    <br></br>
    <OurStepper /> 
  </React.StrictMode>,
)
