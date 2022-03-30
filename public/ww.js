
	function divideByThree (num) {
		let res = '';
		for (let i = 1; i < num; i++) {
			if(i % 3 === 0) {
				res = res + `${i}, `;
			}      
		};
		return res;
	};

onmessage = e => {
	const num = e.data;
	if(Number.isInteger(parseInt(num))){
	
	}else {
		throw new Error('Is not a number')
	};
	const res = divideByThree(num);

	postMessage(res);
};