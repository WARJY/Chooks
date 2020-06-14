import { Ref } from '@vue/composition-api';

export function usePagination(): {
    page: Ref<number>
    pageSize: Ref<number>
    pageCount: Ref<number>
    data: Ref<[]>
    paginationData: Ref<[]>
    pageChange(curPage:number):void
    pageSizeChange(curPageSize:number):void
    callback: Ref<Function>
}