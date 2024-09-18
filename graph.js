// Look at graph__image.png
// Search in width
const graph = {}

graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

const matrix = [
	[0, 1, 1, 0, 0, 0, 0]
	[0, 0, 0, 0, 1, 0, 0]
	[0, 0, 0, 1, 0, 1, 0]
	[0, 0, 0, 0, 1, 0, 0]
	[0, 0, 0, 0, 0, 0, 1]
	[0, 0, 0, 0, 1, 0, 1]
	[0, 0, 0, 0, 0, 0, 0]
]

//QUEUE - first in first out
function breadthSearch(graph, start, end) {
	let queue = []
	queue.push(start)

	while (queue.length) {
		const current = queue.shift()
		if (!graph[current]) {
			graph[current] = []
		}
		if (graph[current].includes(end)) {
			return true
		} else {
			queue = [...queue, ...graph[current]]
		}
	}
	return false
}

console.log(breadthSearch(graph, 'a', 'g'))
