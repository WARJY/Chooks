import { ref, watch, watchEffect } from "@vue/composition-api"
import is from "../utils/is"

export function useCount() {
    const count = ref(0)
    const min = ref(0)
    const max = ref(Math.pow(2, 53))

    const change = function (val) {
        count.value += val
    }

    watch([count, min, max], ([countVal, minVal, maxVal]) => {
        if (+countVal > +maxVal) count.value = maxVal
        if (+countVal < +minVal) count.value = minVal
    }, {
        flush: "sync"
    })

    const stop = ref(() => { })

    const countDown = function (interval = 1000, val = 1) {
        return new Promise((r, j) => {
            try {
                let cb = setInterval(() => {
                    if (count.value > 0) return count.value -= val
                    r(true)
                    clearInterval(cb)
                }, interval)
                stop.value = function () { clearInterval(cb) }
            } catch (e) {
                j(e)
                stop(e)
            }
        })
    }

    return {
        count,
        min,
        max,
        change,
        countDown,
        stop
    }
}