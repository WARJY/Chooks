import { Ref } from '@vue/composition-api';

export function usePagination(callback?: Function): {
    page: Ref<number>,
    pageSize: Ref<number>,
    pageCount: Ref<number>,
    pageChange(curPage:number):void
}