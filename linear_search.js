const array = [1, 2, 4, 6, 1, 2, 5, 6, 7, 8, 9]
const searchedItem = 9
let iterationQuantity = 0

function linearSearch(searchedItem, array) {
	for (let index = 0; index < array.length; index++) {
		count += 1
		const element = array[index]

		if (element === searchedItem) {
			return index
		}
	}
	return null
}

console.log(linearSearch(searchedItem, array))
console.log(iterationQuantity) // O(n)
