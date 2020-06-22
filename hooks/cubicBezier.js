import { ref } from "@vue/composition-api"
import easing from "../utils/easing"
import is from "../utils/is"

export function useCubicBezier(fps = 29) {

    const timeOut = 1000 / fps
    const bezier = ref(0)

    let stop = ref(() => { })

    const run = function (duration, ease="easeInQuad") {
        if(!duration) return console.error("run函数需要传入持续时间")
        if (is(ease) === String && !easing[ease]) return console.error("运动函数" + ease + "不存在")
        const easeFun = is(ease) === String ? easing[ease] : ease
        const startTime = new Date().getTime()

        return new Promise((r, j) => {
            try {
                let cb = setInterval(() => {
                    let currentTime = new Date().getTime() - startTime
                    if (currentTime > duration || bezier.value > 1) {
                        stop.value()
                        bezier.value = 1
                        return r(true)
                    }
                    bezier.value = easeFun(currentTime / duration)
                }, timeOut)

                stop.value = function () {
                    clearInterval(cb)
                }
            } catch (e) {
                j(e)
                stop.value()
            }
        })
    }

    return {
        bezier,
        run,
        stop
    }
}