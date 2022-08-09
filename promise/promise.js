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
    console.log('Promise resolved', data);
})