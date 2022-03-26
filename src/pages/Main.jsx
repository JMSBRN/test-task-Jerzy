import React, { useContext } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import { Context } from '../Context';

function Main() {
	const {setNumbersToLocalStorage} = useContext(Context);

	return (
		<div className='main'>
			<div className="input-form">
			  <Input />
			  <Button onClick={setNumbersToLocalStorage} />
				<div className="error"></div>
			</div>
				<div className='numbers-result-title'></div>
			  <div  className="numbers-result"></div>
		</div>
	);
};

export default Main;