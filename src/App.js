import React, { useState } from 'react';

import './App.css';
import Main from './pages/Main';
import {Context} from './Context';
//import {divideByThree} from './divideNumber';

function App() {
  const [inputValue, setInputValue] = useState('');
  let resultValue = '';

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
	};

  const worker = new Worker('./ww.js'); // './ww.js' impotant!- not ../public/ww.js
 
  worker.onmessage = e => {
    resultValue = e.data;
    if (resultValue){
      inputValidation();
      document.querySelector('.spinner-border').classList.add('hidden');
    }else {
     document.querySelector('.spinner-border').classList.remove('hidden');
    };
    
  };

 const handleSubmit = () => {
   setTimeout(() => {
     worker.postMessage(+inputValue);
   }, 3000);

 
 };


 const inputValidation = () => {
  let text;
  let textError;
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 10000000) {
    textError = "Input not valid. Please input numbers  above 0 or below 10 000 000.";
    document.querySelector('.error').innerHTML = textError;
  } else {
    text = `in number ${inputValue}`;
    document.querySelector('.error').innerHTML = text;
    document.querySelector('.numbers-result-title').innerHTML =  ` Divided by three, numbers is :`;
    document.querySelector('.numbers-result').innerHTML = `${resultValue? resultValue: 'please input number above 3'}`;
  }
};
  return (
    <div className="App">
      <Context.Provider value ={{
        handleInputValue,
        inputValue,
        handleSubmit,
        resultValue
      }}>
       <Main />
      </Context.Provider>
    </div>
  );
};

export default App;
