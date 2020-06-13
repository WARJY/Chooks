import { Ref } from '@vue/composition-api';

export function usePagination(): {
    page: Ref<number>
    pageSize: Ref<number>
    pageCount: Ref<number>
    paginationData: Ref<[]>
    calcPage():void
    pageChange(curPage:number):void
    pageSizeChange(curPageSize:number):void
}