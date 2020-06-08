### useTable

> 为【表格】提供数据源，选择，过滤选择等逻辑

#### Type
```ts
function useTable(uniqueId: string | number): {
    data: Ref<[]>,
    select: Ref<[]>,
    selectChange(selected: any): void,
    selectFilter(selected: any): void
}
```
#### Params
- uniqueId &mdash; 表格中每项的唯一id

#### Return
- data &mdash; 表格数据
- select &mdash; 表格中已被选择的数据
- selectChange(selected) &mdash; 表格选择的处理函数
- selectFilter(selected) &mdash; 表格选择的处理函数（不重复选择）

#### Example
```js
import { useTable } from 'chooks'
export default {
    setup(){
        const { data, select, selectChange, selectFilter } = useTable("id")

        return {
            data, select, selectChange, selectFilter
        }
    }
}
```
