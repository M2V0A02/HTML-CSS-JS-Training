const p = new Promise(function(resolse, reject) {
    setTimeout(() => {
        console.log('preparing data...')
        const backendData = {
            server: 'asw',
            port: 2000,
            status: 'working'
        }
        resolse()
    }, 2000)
})