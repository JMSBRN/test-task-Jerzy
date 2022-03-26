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
	inputValidation();
 };

 function inputValidation() {
  // If x is Not a Number or less than one or greater than 10
  let text;
  if (isNaN(inputValue) || inputValue < 1 || inputValue > 10) {
    text = "Input not valid";
  } else {
    text = "Input OK";
  }
  document.querySelector('.error').innerHTML = text;
}
  

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
