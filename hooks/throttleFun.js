export function useThrottleFun(fun, timeOut){

    let timer = ""

    let throttleFun = function(...rest){
        if(!timer){
            timer = setTimeout(function(){
                fun(rest)
                clearTimeout(timer)
                timer = ""
            },timeOut)
        }
    }

    return throttleFun
}