const factorial = (n) => {
	// recursive base
	if (n === 1 || !n) return 1
	// 1 iteration: 5 * (5 - 1)
	// 2 iteration: 5 * (5 - 1) * 4 * (4 - 1)
	// 3 iteration: 5 * (5 - 1) * 4 * (4 - 1) * 3 * (3 - 1)
	// 4 iteration: 5 * (5 - 1) * 4 * (4 - 1) * 3 * (3 - 1) * 2 * (2 - 1)
	// 5 iteration: 5 * (5 - 1) * 4 * (4 - 1) * 3 * (3 - 1) * 2 * (2 - 1) * 1
	return n * factorial(n - 1)
}

console.log(factorial(5))

const fibonacci = (n) => {
	if (n === 1 || n === 2) return 1

	return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(8))
