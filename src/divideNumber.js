
export	function divideByThree (num) {
		let res = '';
		for (let i = 1; i < num; i++) {
			if(i % 3 === 0) {
				res = res + `${i}, `;
			}      
		};
		return res;
	};

