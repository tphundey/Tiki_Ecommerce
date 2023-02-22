const loadScript = function(src, callback) {
    // <script src=""></script>
    const script = document.createElement('script')
    // script.src = "https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"
    script.src = src
    script.onload = function() {
        callback()
    }
    script.onerror = function() {
        const error = new Error("Lỗi rồi anh ơi!!!")
        callback(error)
    }
    document.head.append(script)
}

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js', function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log(_.uniq([3,4,5,5,6,8,8,9]));
    }
    // callback
})
// console.log(_.uniq([3,4,5,5,6,8,8,9]));

// [3,4,5,5,6,8,8,9].map(function(item, index) {
//     console.log(item);
// })