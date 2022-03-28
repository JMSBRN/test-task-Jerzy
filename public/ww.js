
onmessage = e => {
	function divideByThreeWorker (num) {
		let res = '';
		for (let i = 1; i < num; i++) {
			if(i % 3 === 0) {
				res = res + `${i}, `;
			}      
		};
		return res;
	};
	const resultWorker = divideByThreeWorker(e.data)
	postMessage(resultWorker)
};