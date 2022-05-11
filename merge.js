function merge(arr1, arr2) {
	let i = 0;
	let j = 0;
	let out = [];

	while (i < arr1.length && j < arr2.length) {
		console.log("inside merge() while..", arr1, arr2);
		console.log("i,", i, "j,", j);
		if (arr2[j] > arr1[i]) {
			out.push(arr1[i]);
			i++;
		} else {
			out.push(arr2[j]);
			j++;
		}
	}

	while (i < arr1.length) {
		out.push(arr1[i]);
		i++;
	}

	while (j < arr2.length) {
		out.push(arr2[j]);
		j++;
	}

	console.log("out", out);
	return out;
}

function mergeSort(arr) {
	console.log("BACK to top of mergeSort()...", arr);
	let x = arr.length;
	if (x <= 1) {
		return arr;
	}
	let mid = Math.floor(x / 2);
	let arr1 = mergeSort(arr.slice(0, mid));
	let arr2 = mergeSort(arr.slice(mid, x));

	console.log("BEFORE going into mergeSort", arr1, arr2);

	return merge(arr1, arr2);
}

module.exports = { merge, mergeSort };
