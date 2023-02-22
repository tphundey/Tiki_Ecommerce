// Sync
// console.log("task1");
// // console.log("task2");
// alert("task2")
// console.log("task3");
// console.log("task4");

// Async
// setTimeout
function asyncFunc(text, time, callback) {
    setTimeout(function() {
        console.log(text);
        if(callback) {
            callback()
        }
    }, time) // 1s
}

asyncFunc("task1", 1000, function() {
    asyncFunc("task2", 500, function() {
        asyncFunc("task3", 900, function() {
            asyncFunc("task4", 800, function() {
                asyncFunc("task4", 800, function() {
                    asyncFunc("task4", 800, function() {
                        asyncFunc("task4", 800, function() {
        
                        })
                    })
                })
            })
        })
    })
})