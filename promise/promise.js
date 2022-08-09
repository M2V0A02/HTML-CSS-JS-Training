const p = new Promise(function(resolse, reject) {
    setTimeout(() => {
        console.log('preparing data...')
        const backendData = {
            server: 'asw',
            port: 1000,
            status: 'working'
        }
        resolse(backendData)
    }, 1000)
})

p.then(data => {
    return new Promise((resolse, reject) => {
        setTimeout(() => {
            data.modified = true
            resolse(data)
        }, 1000)
    })
}).then(clientData => {
    clientData.fromPromise = true
    console.log(clientData)
    return clientData
})  