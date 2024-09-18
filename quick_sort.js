const array = [0, 3, 39, 2, 1, 42, 1, -1, 23, 4, 12, 32, 332, 321, 6, 7, 77]
let iterationQuantity = 0

function quickSort(array) {
	if (array.length <= 1) return array

	let pivotIndex = Math.floor(array.length / 2)
	let pivot = array[pivotIndex]
	let less = []
	let greater = []

	for (let index = 0; index < array.length; index++) {
		iterationQuantity += 1
		if (index === pivotIndex) continue
		if (array[index] < pivot) {
			less.push(array[index])
		} else {
			greater.push(array[index])
		}
	}
	return [...quickSort(less), pivot, ...quickSort(greater)]
}

console.log(quickSort(array))
console.log(iterationQuantity) // O(n * log₂n)
