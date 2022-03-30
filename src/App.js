import React, { useState } from 'react';

import './App.css';
import Main from './pages/Main';
import {Context} from './Context';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [disabled, setDisabled] = useState(false);
  let resultValue = '';
  
  const worker = new Worker("./ww.js"); 
  worker.postMessage(+inputValue);
  worker.onmessage = e => {
    resultValue = e.data;
  };
  const handleInputValue = (e) => {
    setInputValue(e.target.value);
	};
 const handleSubmit = () => {
  document.querySelector('.spinner-border').classList.remove('hidden');
  setDisabled(true);
   setTimeout(() => {
    inputValidation(); 
    document.querySelector('.spinner-border').classList.add('hidden');
   },3000);
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
    setDisabled(false);
  };
};

  return (
    <div className="App">
      <Context.Provider value ={{
        handleInputValue,
        inputValue,
        handleSubmit,
        resultValue,
        disabled
      }}>
       <Main />
      </Context.Provider>
    </div>
  );
};

export default App;
