### usePagination

> 为【分页】提供页码，页数，每页大小，页码变化等逻辑

#### Type
```ts
function usePagination(callback?: Function): {
    page: Ref<number>,
    pageSize: Ref<number>,
    pageCount: Ref<number>,
    pageChange(curPage:number):void
}
```
#### Params
- callback &mdash; 页码变化后的回调函数

#### Return
- page &mdash; 页码
- pageSize &mdash; 每页大小
- pageCount &mdash; 页数
- pageChange(curPage) &mdash; 页码通过参数传入

#### Example
```js
import { usePagination } from 'chooks'
export default {
    setup(){
        return {
            ...usePagination()
        }
    }
}
```
