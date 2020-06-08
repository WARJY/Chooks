### useDebounceFun

> 为【函数】添加防抖功能的装饰器函数

#### Type
```ts
function useDebounceFun(fun:Function, timeOut:number):Function
```
#### Params
- fun &mdash; 需要被装饰的函数，可以为任何函数
- timeOut &mdash; 需要被装饰的函数，可以为任何函数

#### Return
- 防抖装饰后的函数

#### Example
```js
import { useDebounceFun } from 'chooks'
export default {
    setup(){
        //any function
        const getUserData = async function(){
            await store.dispatch("getUserData").then(data=>{})
        }
        return { 
            getUserData: useDebounceFun(getUserData, 1000)
        }
    }
}
```
