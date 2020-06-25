import { storiesOf } from '@storybook/vue'
import { defineComponent, ref, computed, onMounted } from '@vue/composition-api'

import { usePagination } from '../index'
import md from '../docs/pagination.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - paginationManual</div>
            <div class="panel">
                <div>data: {{data}}</div>
                <div>page: {{page}}</div>
                <div>pageSize: {{pageSize}}</div>
                <div>pageCount: {{pageCount}}</div>
                <div>paginationData: {{paginationData}}</div>

                <button @click="pageSizeChange(8)">pageSize8</button>
                <button @click="pageSizeChange(10)">pageSize10</button><br/>

                <button v-for="(item,index) in pages" :key="index" @click="pageChange(item)">page{{item}}</button>
            </div> <br />
        </div>
    `,
    setup() {
        let { 
            page, pageSize, pageCount, 
            pageChange, pageSizeChange, data, paginationData 
        } = usePagination()

        page.value = 1
        pageSize.value = 10

        //填充手动分页数据
        let dataAll:any = []
        for(let i=0;i<99;i++){
            dataAll.push(i)
        }
        data.value = dataAll

        const pages = computed(()=>{
            let d = []
            for(let i=0;i<pageCount.value;i++){
                d.push(i+1)
            }
            return d
        })

        return {
            page, pageSize, pageCount, pageChange, pageSizeChange, 
            data, paginationData,
            pages
        }
    }
})

storiesOf('UI|usePagination', module)
    .add('paginationManual', () => Count, {
        readme: {
            sidebar: md
        }
    })
