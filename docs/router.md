### useRouter

> 为【vue-router】提供刷新，后退，跳转，获取参数等逻辑

#### Type
```ts
function useRouter(context:SetupContext): {
    refresh():void,
    back():void,
    replace(target:string):void,
    push(target:string, query:any):void,
    getQuery():any
}
```
#### Params
- context &mdash; 当前组件的Vue上下文

#### Return
- refresh &mdash; 刷新当前路由
- back &mdash; 路由后退
- replace(target) &mdash; 路由重定向
- push(target,query) &mdash; 推入一个新的路由
- getQuery &mdash; 获取路由参数

#### Example
```js
import { useRouter, onMounted } from 'chooks'
export default {
    setup(prop:any, context:SetupContext){
        const {
            refresh, back, replace, push, getQuery
        } = useRouter(context)

        onMounted(()=>{
            console.log(getQuery())
            push("/user/list",{
                id:1
            })
        })

        return {
            refresh, back, replace, push, getQuery
        }
    }
}
```
