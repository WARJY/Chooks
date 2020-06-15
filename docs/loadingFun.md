### useLoadingFun

> 为【函数】添加loading功能的装饰器函数

#### Type
```ts
function useLoadingFun(fun:Function, timeOut?:number):{
    loading: Ref<boolean>
    fun: Function
}
```
#### Params
- fun &mdash; 需要被装饰的函数，可以为任何函数
- timeOut &mdash; 等待最大超时时间

#### Return
- loading &mdash; 被等待函数的loading状态
- fun &mdash; loading装饰后的函数

#### Example
```js
import { useLoadingFun } from 'chooks'
export default {
    setup(){
        //any function
        const getUserData = async function(){
            await store.dispatch("getUserData").then(data=>{})
        }

        const { loading, fun} = useLoadingFun(getUserData)

        console.log(loading.value === false)
        fun()
        console.log(loading.value === true)

        //afterFetch
        console.log(loading.value === false)

        return { 
            getUserData: fun,
            loading
        }
    }
}
```
