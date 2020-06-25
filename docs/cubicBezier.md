### useCubicBezier

> 为【贝塞尔过渡】提供计算，开始，结束等函数

#### Type
```ts
declare function easeFun(input: number): number
function useCubicBezier(fps: number): {
    bezier: Ref<number>
    run(duration: number, ease: "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInExpo" | "easeOutExpo" |"easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInElastic" | "easeOutElastic" | "easeInOutElastic" | "easeInBack" | "easeOutBack" | "easeInOutBack" | "easeInBounce" | "easeOutBounce" | "easeInOutBounce" | easeFun): Promise<true | Error>
    stop: Ref<Function>
}
```

#### Params
- fps &mdash; 函数每秒执行次数，默认为29

#### Return
- bezier &mdash; 实时贝塞尔曲线数值（0-1）表示从开始到结束
- run(duration,ease) &mdash; 开始贝塞尔计算，返回过渡完成后的Promise
    - duration &mdash; 过渡持续时间，单位毫秒
    - ease &mdash; 缓动函数或预设，默认为easeInQuad
- stop() &mdash; 停止计算（此函数为ref函数，执行时需要```stop.value()```）

#### Example
```js
import { useCubicBezier } from 'chooks'
export default {
    setup(){
        const { bezier, run, stop } = useCubicBezier(29)

        run(1000, "easeInCirc").then(data=>{
            console.log("complete")
        })

        stop.value()
        
        return {
            bezier
        }
    },
    render(){
        return (
            <div :style="{opacity:bezier}">1111</div>
            <div :style="{top:100*bezier+'px'}">1111</div>
        )
    }
}
```