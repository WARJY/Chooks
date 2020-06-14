### usePagination

> 为【分页】提供页码，页数，每页大小，页码变化等逻辑

#### Type
```ts
function usePagination(): {
    page: Ref<number>
    pageSize: Ref<number>
    pageCount: Ref<number>
    data: Ref<[]>
    paginationData: Ref<[]>
    pageChange(curPage:number):void
    pageSizeChange(curPageSize:number):void
    callback: Ref<Function>
}
```

#### Return
- page &mdash; 页码
- pageSize &mdash; 每页大小
- pageCount &mdash; 页数
- data &mdash; 手动分页时传入的源数据
- paginationData &mdash; 分页后当前页数据
- pageChange(curPage) &mdash; 翻页函数，页码通过参数传入
- pageSizeChange(curPageSize) &mdash; 改变每页大小函数，每页大小通过参数传入
- callback &mdash; 分页发生变化后的回调函数

#### Example
```js
import { ref, onMounted } from "@vue/composition-api";
import { usePagination } from 'chooks'
export default {
    setup(){

        let { page, pageSize, pageCount, pageChange, pageSizeChange, data, paginationData, callback } = usePagination(paginationCB, 10, data)

        //远程分页
        callback.value = function(pg, pgSize){
            store.dispatch("queryByPage", {
                page: page.value,
                pageSize: page.value
            }).then(data=>{
                pageCount.value = data.pageCount
            })
        }
        pageChange(2)
        pageSizeChange(20)

        //手动分页
        onMounted(()=>{
            store.dispatch("queryAll").then(data=>{
                data.value = data
                console.log(paginationData.value)
            })
            pageChange(1)
            pageSizeChange(10)
        })

        return {
           page, pageSize, pageCount, pageChange, pageSizeChange, paginationData 
        }
    }
}
```
