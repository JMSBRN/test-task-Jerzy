import React, { useState } from 'react';

import './App.css';
import Main from './pages/Main';
import {Context} from './Context';

function App() {
  const [inputValue, setInputValue] = useState('');
  let dividedByThreeNumers = '';

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
	};
  const getItemFromLocalStorage = (data) => {
    localStorage.getItem(data);
  };
	for (let i = 1; i < inputValue; i++) {
		if(i % 3 === 0) {
			dividedByThreeNumers = dividedByThreeNumers + `${i}, `;
		}
	};
 const setNumbersToLocalStorage = () => {
	localStorage.setItem('numbers', dividedByThreeNumers);
  document.querySelector('.spinner-border').classList.remove('hidden');
  setTimeout(() => {
    document.querySelector('.spinner-border').classList.add('hidden');
    inputValidation();
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
    document.querySelector('.numbers-result').innerHTML = `${dividedByThreeNumers?dividedByThreeNumers: 'please input number above 3'}`;
  }
};
  return (
    <div className="App">
      <Context.Provider value ={{
        handleInputValue,
        inputValue,
        getItemFromLocalStorage,
        setNumbersToLocalStorage,
        dividedByThreeNumers
      }}>
       <Main />
      </Context.Provider>
    </div>
  );
};

export default App;
