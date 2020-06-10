### usePagination

> 为【分页】提供页码，页数，每页大小，页码变化等逻辑

#### Type
```ts
function callback(page:number, pageSize:number):void{}
function usePagination(callback?:callback, defaultPageSize=10, data?:Ref<[]>): {
    page: Ref<number>
    pageSize: Ref<number>
    pageCount: Ref<number>
    paginationData: Ref<[]>
    calcPage():void
    pageChange(curPage:number):void
    pageSizeChange(curPageSize:number):void
}
```
#### Params
- callback &mdash; 页码变化后的回调函数
- defaultPageSize &mdash; 每页大小，默认为10
- data &mdash; 手动分页时传入的数据源

#### Return
- page &mdash; 页码
- pageSize &mdash; 每页大小
- pageCount &mdash; 页数
- pageChange(curPage) &mdash; 翻页函数，页码通过参数传入
- pageSizeChange(curPageSize) &mdash; 改变每页大小函数，每页大小通过参数传入
- calcPage &mdash; 手动分页时，在载入数据后调用以计算分页

#### Example
```js
import { ref, onMounted } from "@vue/composition-api";
import { usePagination } from 'chooks'
export default {
    setup(){

        const data = ref([])
        const { page, pageSize, pageCount, pageChange, pageSizeChange, calcPage, paginationData } = usePagination(paginationCB, 10, data)

        //远程分页
        const paginationCB = function(pg, pgSize){
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
                paginationData.value = data
                calcPage()
            })
            pageChange(1)
            pageSizeChange(10)
        })

        return {
           page, pageSize, pageCount, pageChange, pageSizeChange, calcPage, paginationData 
        }
    }
}
```
