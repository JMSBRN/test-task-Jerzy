function divideByThree (num, res) {
	for (let i = 1; i < num; i++) {
		if(i % 3 === 0) {
			res = res + `${i}, `;
		}      
	}
	return res;
};
export { divideByThree};