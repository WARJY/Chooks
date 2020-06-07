import { ref } from '@vue/composition-api';

export function usePagination(callback){

    const page = ref(1)
    const pageSize = ref(10)
    const pageCount = ref(1)

    const pageChange = function(curPage){
        page.value = curPage
        if(callback) callback(curPage)
    }

    return {
        page,
        pageSize,
        pageCount,
        pageChange
    }
}