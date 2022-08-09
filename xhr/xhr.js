const requestUrl = "https://jsonplaceholder.typicode.com/users"

const xhr = new XMLHttpRequest()

xhr.open('GET', requestUrl)

xhr.onload = () => {
    console.log(xhr.response)
}

xhr.send()