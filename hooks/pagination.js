import { ref, watchEffect } from '@vue/composition-api';

export function usePagination() {

    const data = ref([])
    const paginationData = ref([])

    const page = ref(1)
    const pageSize = ref(10)
    const pageCount = ref(1)

    const callback = ref(function () { })

    const pageChange = function (curPage) {
        page.value = curPage
        callback.value()
    }

    const pageSizeChange = function (curPageSize) {
        pageSize.value = curPageSize
        callback.value()
    }

    watchEffect(() => {
        if (data.value.length === 0) return
        pageCount.value = data.value.length % pageSize.value > 0 ? Math.floor(data.value.length / pageSize.value) + 1 : data.value.length / pageSize.value
        // let a = data.value.slice(pageSize.value * (page.value - 1), pageSize.value * page.value)
        let count = pageSize.value
        if(paginationData.value.length > count) count = paginationData.value.length
        for(let i=0;i<count;i++){
            if(i >= pageSize.value) return delete paginationData.value[index]
            paginationData.value[i] = data.value[(page.value - 1) * pageSize.value + i]
        }
    },{
        flush: 'sync'
    })

    return {
        page,
        pageSize,
        pageCount,
        data,
        paginationData,
        pageChange,
        pageSizeChange,
        callback
    }
}