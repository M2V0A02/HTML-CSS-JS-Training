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
            reject(data)
        }, 1000)
    })
})
  .catch(err => console.error(err))
  .then(data => console.log(data))
  .finally( () => console.log('finnaly'))