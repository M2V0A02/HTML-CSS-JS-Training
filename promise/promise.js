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

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log('After 2 sec'))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promise');
})

Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('promise');
})