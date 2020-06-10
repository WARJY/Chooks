import { ref } from '@vue/composition-api';

export function usePagination(callback, defaultPageSize=10, data){

    const page = ref(1)
    const pageSize = ref(defaultPageSize)
    const pageCount = ref(1)
    const paginationData = ref([])

    const calcPage = function(){
        if(data.value.length === 0) return []
        pageCount.value = data.value.length % pageSize.value > 0 ? Math.floor(data.value.length / pageSize.value) + 1 : data.value.length / pageSize.value
        paginationData.value = [...data.value].slice(pageSize.value * (page.value - 1), pageSize.value * page.value)
    }

    const pageChange = function(curPage){
        page.value = curPage
        if(data) calcPage()
        if(callback) callback(curPage, pageSize.value)
    }

    const pageSizeChange = function(curPageSize){
        pageSize.value = curPageSize
        if(data) calcPage()
        if(callback) callback(page.value, curPageSize)
    }

    return {
        page,
        pageSize,
        pageCount,
        paginationData,
        calcPage,
        pageChange,
        pageSizeChange
    }
}