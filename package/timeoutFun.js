import { ref } from "@vue/composition-api"

export function useTimeoutFun(fun, timeOut) {

    const finished = ref(false)

    let timeoutFun = function (...rest) {
        let cb = setTimeout(async () => {
            await fun(...rest)
            finished.value = true
            clearTimeout(cb)
        }, timeOut)
    }

    return {
        finished,
        fun: timeoutFun
    }
}