function bubbleSort(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		console.log("i =", arr[i]);
		for (let j = 0; j < i; j++) {
			console.log("j =", arr[j]);
			if (arr[j] > arr[i]) {
				let k = arr[j];
				arr[j] = arr[i];
				arr[i] = k;
			}
		}
	}
	return arr;
}

module.exports = bubbleSort;
