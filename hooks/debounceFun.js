export function useDebounceFun(fun, timeOut){

    let timer = ""

    let debounceFun = function(){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
           fun()
        },
        timeOut)
    }

    return debounceFun
}