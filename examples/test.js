function asynFunc(text, time, caLLBack) {
    setTimeout(function(){
        console.log(text);
        if (caLLBack) {
            caLLBack()
        }
    }, time)

}

asynFunc("hello1", 1000, function (){
    asynFunc("hello2", 1000, function (){
        asynFunc("hello3", 1000, function (){
            asynFunc("hello4", 1000, function (){
    
            })
        })
    })
})