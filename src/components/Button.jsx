import React from 'react';

function Button( {onClick}) {
	return (
		<div className='button'>
      <button onClick={onClick} type="submit">submit</button>
		</div>
	);
};

export default Button;