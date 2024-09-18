const array = [0, 3, 1, 2, 1, 42, 1, -1, 23, 4, 12, 32, 332, 321, 6, 7, 77]
let iterationQuantity = 0

function selectionSort(array) {
	for (let index = 0; index < array.length; index++) {
		let indexMin = index
		for (let indexInner = index + 1; indexInner < array.length; indexInner++) {
			if (array[indexInner] < array[indexMin]) {
				indexMin = indexInner
			}
			iterationQuantity += 1
		}
		let tmp = array[index]
		array[index] = array[indexMin]
		array[indexMin] = tmp
	}
	return array
}

console.log(selectionSort(array))
console.log(iterationQuantity) // 0(1/2n * n) => O(n²)
