### useStore

> 为【vuex】提供state, commit, dispatch等逻辑

#### Type
```ts
function useStore(context: SetupContext, module?: string): {
    state: Ref<any>,
    commit(mutation: string, arg?: any): void,
    dispatch(action: string, arg?: any): Promise<any>
}
```
#### Params
- context &mdash; 当前组件的Vue上下文
- module &mdash; store的模块

#### Return
- state &mdash; store或对应模块的state
- commit(mutation,arg) &mdash; store的commit方法
- dispatch(action,arg) &mdash; store的dispatch方法

#### Example
```js
import { useStore } from 'chooks'
export default {
    setup(prop:any, context:SetupContext){
        const { state, commit, dispatch } = useStore(context)

        onMounted(()=>{
            console.log(state)
            commit("set", 1)
            dispatch("set", 1).then(data=>{})
        })

        return {
            state, commit, dispatch
        }
    }
}
```
