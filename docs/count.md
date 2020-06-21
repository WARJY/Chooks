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
}
```

#### Return
- count &mdash; 当前数值
- min &mdash; 最小值，默认0
- max &mdash; 最大值，默认2^53
- change(val) &mdash; 数值改变函数，传入正负数
- countDown(interval,val) &mdash; 倒计时函数，返回Promise

#### Example
```js
import { useCount} from 'chooks'
export default {
    setup(){
        const { count, change, min, max, countDown } = useCount()

        count.value = 10
        max.value = 2

        change(10)
        change(-1)

        countDown(1000, 1).then(data=>{
            console.log("complete")
        })
        
        return {}
    }
}
```