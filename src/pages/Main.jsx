import React, { useContext } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import { Context } from '../Context';

function Main() {
	const {handleSubmit, disabled} = useContext(Context);

	return (
		<div className='main'>
			<div className="spinner-border hidden"></div>
			<div className="main-container">
				<h3>Please input number and check how many numbers divided by three in !</h3>
				<div className="form-input">
					<Input />
					<Button disabled={disabled} onClick={handleSubmit} />
				</div>
					<div className="messages">
						<div className="error"></div>
						<div className='numbers-result-title'></div>
						<div className="numbers-result"></div>
					</div>
			</div>
		</div>
	);
};

export default Main;