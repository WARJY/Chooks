export function useDebounceFun(fun, timeOut){

    let timer = ""

    let debounceFun = function(...rest){
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=>{
           fun(...rest)
        },
        timeOut)
    }

    return debounceFun
}