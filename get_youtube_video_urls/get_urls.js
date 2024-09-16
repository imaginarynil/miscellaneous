console.clear()
let urls = []

// All videos in a channel
for (const a of document.querySelectorAll("a#video-title-link")) {
	urls.push(a["href"])
}

// All videos in a playlist	
for (const a of document.querySelectorAll("a#wc-endpoint")) {
	urls.push(a["href"].slice(0, a["href"].indexOf("&list=")))
}

console.log(urls.length)
console.log(urls.join("\n"))