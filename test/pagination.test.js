import Vue from 'vue'
import compositionAPI, { ref } from '@vue/composition-api'
import { usePagination } from '../hooks/pagination'
Vue.use(compositionAPI)

describe("test usePagination", () => {

    //远程分页
    test("test remote pagination", () => {
        const { page, pageSize, pageCount, pageChange, pageSizeChange } = usePagination(paginationCB, 10)

        const paginationCB = function(pg, pgSize){
            expect(pg).toBe(page.value)
            expect(pgSize).toBe(pageSize.value)
            pageCount.value = 10
            expect(pageCount.value).toBe(10)
        }

        pageChange(2)
        pageSizeChange(8)
    })

    //手动分页
    test("test manual pagination", () => {

        const data = ref([])
        const { page, pageSize, pageCount, pageChange, pageSizeChange, calcPage, paginationData } = usePagination(paginationCB, 10, data)

        const paginationCB = function(pg, pgSize){
            expect(pg).toBe(page.value)
            expect(pgSize).toBe(pageSize.value)
        }

        //填充手动分页数据
        for(let i=0;i<100;i++){
            data.value.push(i)
        }

        //计算分页
        calcPage()
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
