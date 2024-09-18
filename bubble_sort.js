const array = [0, 3, 1, 2, 1, 42, 1, -1, 23, 4, 12, 32, 332, 321, 6, 7, 77]
let iterationQuantity = 0

function bubbleSort(array) {
	for (let index = 0; index < array.length; index++) {
		for (let indexInner = 0; indexInner < array.length; indexInner++) {
			if (array[indexInner + 1] < array[indexInner]) {
				let tmp = array[indexInner]
				array[indexInner] = array[indexInner + 1]
				array[indexInner + 1] = tmp
			}
			iterationQuantity += 1
		}
	}
	return array
}

console.log(bubbleSort(array))
console.log(iterationQuantity) // 0(n * n) => O(n²)
