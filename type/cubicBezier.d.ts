import { Ref } from '@vue/composition-api'

type easeFun = (input: number)=> number

export function useCubicBezier(fps: number): {
    bezier: Ref<number>
    run(duration: number, ease: "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" |
        "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInExpo" | "easeOutExpo" |
        "easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInElastic" | "easeOutElastic" | "easeInOutElastic" | "easeInBack" | "easeOutBack" |
        "easeInOutBack" | "easeInBounce" | "easeOutBounce" | "easeInOutBounce" | easeFun): Promise<true | Error>
    stop: Ref<Function>
}