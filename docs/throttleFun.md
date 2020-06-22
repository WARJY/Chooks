### useThrottleFun

> 为【函数】添加节流功能的装饰器函数

#### Type
```ts
export function useThrottleFun<T extends Function>(fun:T, timeOut:number):T
```
#### Params
- fun &mdash; 需要被装饰的函数，可以为任何函数
- timeOut &mdash; 节流等待时间

#### Return
- 节流装饰后的函数

#### Example
```js
import { useThrottleFun } from 'chooks'
export default {
    setup(){
        //any function
        const getUserData = async function(){
            await store.dispatch("getUserData").then(data=>{})
        }
        return { 
            getUserData: useThrottleFun(getUserData, 1000)
        }
    }
}
```
