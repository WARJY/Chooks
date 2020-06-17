### useSelect

> 为【选项】提供单选，多选，选择变化等逻辑

#### Type
```ts
function useSelect(uniqueId?:any): {
    muti: Ref<boolean>
    select: Ref<any>
    options: Ref<Array<any>>
    select(item: any, filter?: boolean): void
    selectAll(): void
    remove(item: any, removeAll?: boolean): void
    removeAll(): void
    isSelected(item): boolean
}
```
#### Params
- uniqueId &mdash; 选择项的唯一id，不传则通过序列化比较

#### Return
- muti &mdash; 是否多选
- select &mdash; 当前选择的选项
- options &mdash; 可选项数组
- select(item, filter) &mdash; 选择函数，传入filter=true则不能重复添加
- selectAll() &mdash; 选择全部函数
- remove(item, removeAll) &mdash; 移除选项函数，传入removeAll=true则移除全部符合条件的item
- removeAll() &mdash; 移除全部函数
- isSelected(item) &mdash; 返回item是否被选择

#### Example
```js
import { useSelect } from 'chooks'
export default {
    setup(){
        //单选
        const { options, selected, select } = useSelect("id")
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        select({id: 1})

        //多选
        const { muti, options, selected, select, remove } = useSelect("id")
        muti.value = true
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        select({id: 1})
        select({id: 1}, true)
        remove({id:1})

        return {
            options, selected, select, remove
        }
    }
}
```
