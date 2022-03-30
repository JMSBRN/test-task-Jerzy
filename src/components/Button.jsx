import React from 'react';

function Button( {onClick, disabled}) {
	return (
		<div className='button'>
      <button id='button-submit' disabled={disabled} onClick={onClick} type="submit">submit
			</button>
		</div>
	);
};

export default Button;