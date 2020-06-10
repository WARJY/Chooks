import { Ref } from '@vue/composition-api';

function callback(page:number, pageSize:number):void{}

export function usePagination(callback?:callback, defaultPageSize=10, data?:Ref<[]>): {
    page: Ref<number>
    pageSize: Ref<number>
    pageCount: Ref<number>
    paginationData: Ref<[]>
    calcPage():void
    pageChange(curPage:number):void
    pageSizeChange(curPageSize:number):void
}