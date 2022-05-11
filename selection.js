function selectionSort(arr) {
	for (let start = 0; start < arr.length - 1; start++) {
		console.log("start =", arr[start]);

		for (let end = arr.length - 1; end > start; end--) {
			console.log("end =", arr[end]);

			if (arr[start] > arr[end]) {
				let k = arr[end];
				arr[end] = arr[start];
				arr[start] = k;
			}
		}
	}
	return arr;
}

module.exports = selectionSort;
