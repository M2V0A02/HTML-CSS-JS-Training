const p = new Promise(function(resolse, reject) {
    setTimeout(() => {
        console.log('preparing data...')
        const backendData = {
            server: 'asw',
            port: 2000,
            status: 'working'
        }
        resolse(backendData)
    }, 2000)
})

p.then(data => {
    const p2 = new Promise((resolse, reject) => {
        setTimeout(() => {
            data.modified = true
            resolse(data)
        }, 2000)
    })

    p2.then(cliendData => {
        console.log('Data received', cliendData)
    })
})