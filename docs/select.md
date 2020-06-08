### useSelect

> 为【选项】提供单选，多选，选择变化等逻辑

#### Type
```ts
function useSelect(muti: boolean, callback: Function): {
    select: Ref<any>,
    selectArr: Ref<any[]>,
    loading: Ref<boolean>,
    selectFun(val: any): void
}
```
#### Params
- muti &mdash; 是否多选
- callback &mdash; 选择的回调函数，已选项通过参数传入

#### Return
- select &mdash; 当前选择的选项
- selectArr &mdash; 当前选择的选项（多选）
- loading &mdash; 是否loading（异步选择）
- selectFun &mdash; 选择处理函数，已选项通过参数传入

#### Example
```js
import { useSelect } from 'chooks'
export default {
    setup(){
        const remoteSearch = async function(val:any){
            await store.dispatch("remoteSearch").then(data=>{})
        }

        const { select, selectArr, loading, selectFun } = useSelect(true, remoteSearch)

        return {
            select, selectArr, loading, selectFun
        }
    }
}
```
