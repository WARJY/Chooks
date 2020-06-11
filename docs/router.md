### useRouter

> 为【vue-router】提供刷新，后退，跳转，获取参数等逻辑

#### Type
```ts
function useRouter(context:SetupContext): {
    router: VueRouter
    route: Route
    go(index:number):void
    replace(target:string, query?:any):Promise<any>
    push(target:string, query?:any):Promise<any>
    getQuery():any
}
```
#### Params
- context &mdash; 当前组件的Vue上下文

#### Return
- router &mdash; router对象，等同于this.$router
- route &mdash; route对象，等同于this.$route
- go(index) &mdash; 路由历史操作，等同于this.$router.go
- replace(target,query) &mdash; 路由重定向，等同于this.$router.replace，返回执行的Promise
- push(target,query) &mdash; 推入一个新的路由，等同于this.$router.push，返回执行的Promise
- getQuery &mdash; 获取路由参数

#### Example
```js
import { useRouter, onMounted } from 'chooks'
export default {
    setup(prop:any, context:SetupContext){
        const {
            router, route, go, replace, push, getQuery
        } = useRouter(context)

        onMounted(()=>{
            console.log(route.meta)
            console.log(route.props)
            console.log(getQuery())

            push("/user/list",{
                id:1
            }).then(data=>{
                console.log("success")
            }).catch(e=>{
                console.log("error")
            })
        })

        return {
            go, replace, push
        }
    }
}
```
