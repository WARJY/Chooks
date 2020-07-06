import { ref, watch } from '@vue/composition-api';

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

    watch([data, page, pageSize], ([data, page, pageSize]) => {
        if (data.length === 0) return
        pageCount.value = data.length % pageSize > 0 ? Math.floor(data.length / pageSize) + 1 : data.length / pageSize
        paginationData.value = data.slice(pageSize * (page - 1), pageSize * page)
    }, {
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