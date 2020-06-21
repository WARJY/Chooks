import { ref } from "@vue/composition-api"
import is from "../utils/is" 

export function useCount(){
    const count = ref(0)
    const min = ref(0)
    const max = ref(Math.pow(2,53))

    const change = function(val){
        if(is(val) !== Number) return
        let current = count.value + val
        if(current < min.value) return count.value = min.value
        if(current > max.value) return count.value = max.value
        count.value += val
    }

    const countDown = function(interval=1000, val=1){
        return new Promise((r,j)=>{
            try {
                let cb = setInterval(()=>{
                    if(current > 0) return current -= val
                    r(true)
                    clearInterval(cb)
                },interval)
            } catch (e) {
                j(e)
            }
        })
    }
    
    return {
        count,
        min,
        max,
        change,
        countDown
    }
}