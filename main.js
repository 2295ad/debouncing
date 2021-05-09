let counter = 0;

const callApi=()=>{
    console.log('API is invoked',counter++);
}

const wait=function(fn,delay){
    let timerId;
    return function(){
        let context = this;
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            callApi.apply(context,arguments);
        },delay)
    }
}

const callWait=wait(callApi,400);

