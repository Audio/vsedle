const sendRequest = (url, method = 'GET', payload = null) => {
	const xmlhttp = new XMLHttpRequest()

	return new Promise((resolve) => {
		xmlhttp.onreadystatechange = function () {
			if (this.readyState == 4 && this.status == 200) {
				const res = JSON.parse(this.responseText)
				resolve(res)
			}
		}

		xmlhttp.open(method, url, true)
		xmlhttp.setRequestHeader('Content-Type', 'application/json')
		xmlhttp.send(payload ? JSON.stringify(payload) : undefined)
	})
}

export default sendRequest
