import React, { useContext } from 'react';
import { Context } from '../Context';

function Input() {

const {handleInputValue} = useContext(Context);

	return (
		<div className='input'>
     <input onChange={handleInputValue}  type="text"/>
		</div>
	);
};

export default Input;