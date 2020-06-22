### timeoutFun

> 为【函数】添加延迟执行的装饰器函数

#### Type
```ts
function useTimeoutFun<T extends Function>(fun:T, timeOut:number):{
    finished: Ref<boolean>
    fun: T
}
```
#### Params
- fun &mdash; 需要被装饰的函数，可以为任何函数
- timeOut &mdash; 延迟执行时间

#### Return
- finished &mdash; 被等待函数的finished状态
- fun &mdash; 装饰后的函数

#### Example
```js
import { useTimeoutFun } from 'chooks'
export default {
    setup(){
        let delayFun = function () {
            // console.log("complete")
        }

        const { finished, fun } = useTimeoutFun(delayFun, 1000)

        return { 
            delayFun: fun,
            finished
        }
    }
}
```
