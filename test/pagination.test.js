import Vue from 'vue'
import compositionAPI, { ref } from '@vue/composition-api'
import { usePagination } from '../index'
Vue.use(compositionAPI)

describe("test usePagination", () => {

    //远程分页
    test("test remote pagination", () => {
        let { page, pageSize, pageCount, pageChange, pageSizeChange, callback } = usePagination()

        callback.value = function(){
            pageCount.value = 10
        }

        pageChange(2)
        expect(page.value).toBe(2)

        pageSizeChange(8)
        expect(pageSize.value).toBe(8)
    })

    //手动分页
    test("test manual pagination", async () => {

        const { page, pageSize, pageCount, pageChange, pageSizeChange, data, paginationData } = usePagination()

        //填充手动分页数据
        let dataAll = []
        for(let i=0;i<99;i++){
            dataAll.push(i)
        }
        data.value = dataAll

        //计算分页
        expect(pageCount.value).toBe(10)
        expect(paginationData.value.length).toBe(10)
        expect(paginationData.value[0]).toBe(0)
        expect(paginationData.value[9]).toBe(9)

        pageChange(2)
        expect(paginationData.value[0]).toBe(10)
        expect(paginationData.value[9]).toBe(19)

        pageSizeChange(20)
        expect(pageCount.value).toBe(5)
        expect(paginationData.value[0]).toBe(20)
        expect(paginationData.value[19]).toBe(39)
    })
})
