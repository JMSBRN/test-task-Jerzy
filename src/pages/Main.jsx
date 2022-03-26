import React, { useContext } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import { Context } from '../Context';

function Main() {
	const {inputValue, setNumbersToLocalStorage, dividedByThreeNumers} = useContext(Context);

	return (
		<div className='main'>
			<div className="input-form">
			  <Input />
			  <Button onClick={setNumbersToLocalStorage} />
				<div className="error"></div>
			</div>
				<div> in number {inputValue}  -- this numbers divided by three  </div>
			  <div className="result-numbers"> {dividedByThreeNumers}</div>
		</div>
	);
};

export default Main;