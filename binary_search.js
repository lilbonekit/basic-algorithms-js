const array = [1, 4, 5, 12, 21, 24, 31, 45, 65, 66, 71, 122, 2322]

const searchedItem = 2322
let iterationQuantity = 0

function binarySearchLoop(searchedItem, array) {
	let start = 0
	let end = array.length
	let middle
	let found = false
	let index = -1

	while (found == false && start <= end) {
		iterationQuantity += 1
		middle = Math.floor((start + end) / 2)

		if (array[middle] === searchedItem) {
			found = true
			index = middle
			return index
		}

		if (searchedItem < array[middle]) {
			end = middle - 1
		} else {
			start = middle + 1
		}
	}

	return index
}

function binarySearchRecursive(searchedItem, array, start, end) {
	let middle = Math.floor((start + end) / 2)
	iterationQuantity += 1

	if (searchedItem === array[middle]) {
		return middle
	}

	if (searchedItem < array[middle]) {
		return binarySearchRecursive(searchedItem, array, start, middle - 1)
	} else {
		return binarySearchRecursive(searchedItem, array, middle + 1, end)
	}
}

console.log(binarySearchLoop(searchedItem, array))
console.log(binarySearchRecursive(searchedItem, array, 0, array.length))
console.log('iterationQuantity', iterationQuantity) //log₂13
