### useCount

> 为【计数】提供增减，倒计时等函数

#### Type
```ts
function useCount(): {
    count: Ref<number>
    min: Ref<number>
    max: Ref<number>
    change(val: number): void
    countDown(interval: number?, val: number?): Promise<true | Error>
    stop: Ref<Function>
}
```

#### Return
- count &mdash; 当前数值
- min &mdash; 最小值，默认0
- max &mdash; 最大值，默认2^53
- change(val) &mdash; 数值改变函数，传入正负数
- countDown(interval,val) &mdash; 倒计时函数，返回倒计时完成的Promise
    - interval &mdash; 倒计时时间间隔，单位毫秒，如```countDown(500, 1)```表示每500毫秒增加1
    - val &mdash; 倒计时数值变化，如```countDown(1000, -1)```表示每1秒减少1
- stop &mdash; 倒计时停止（此函数为ref函数，执行时需要```stop.value()```）

#### Example
```js
import { useCount } from 'chooks'
export default {
    setup(){
        const { count, change, min, max, countDown, stop } = useCount()

        count.value = 10
        max.value = 2

        change(10)
        change(-1)

        omMounted(()=>{
            countDown(1000, 1).then(data=>{
                console.log("complete")
            })
        })

        return {
            count
        }
    }
}
```