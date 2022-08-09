const requestUrl = "https://jsonplaceholder.typicode.com/users"

const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)

xhr.responseType = 'json'

xhr.onload = () => {
    // console.log(JSON.parse(xhr.response))
    console.log(xhr.response)
}

xhr.onerror = () => {
    console.log(xhr.response)
}

xhr.send()