const promise = new Promise(function(resolve, reject) {
    const status = false
    setTimeout(function() {
        if (status) {
            resolve("Thành công")
        } else {
            reject("Thất bại")
        }
    }, 1000)
})

console.log(promise, "promise");

// Consumer
promise
.then(function(res) {
    console.log(res);
})
.catch(function(error) {
    console.error(error)
})

window.promise = promise