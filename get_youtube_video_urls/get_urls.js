console.clear()
let batchSize = 0
let urls = []
function partition(array, batchSize) {
	const batches = []
	for(let i = 0; i < array.length; i += batchSize) {
		batches.push(array.slice(i, Math.min(array.length, i + batchSize)))
	}
	return batches
}

batchSize = 90
urls = []

// All videos in a channel
for(const a of document.querySelectorAll("a#video-title-link")) {
	urls.push(a["href"])
}

// All videos in a playlist
for(const a of document.querySelectorAll("a#wc-endpoint")) {
	urls.push(a["href"].slice(0, a["href"].indexOf("&list=")))
}

console.log(urls.length)
console.log(Math.floor(urls.length / batchSize) + 1)
for(const batch of partition(urls, batchSize)) {
	console.log(batch.join(" "))
}