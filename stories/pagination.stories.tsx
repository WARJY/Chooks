import { storiesOf } from '@storybook/vue'
import { defineComponent, ref, computed, onMounted } from '@vue/composition-api'

import { usePagination } from '../index'
import md from '../docs/pagination.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - pagination</div>
            <div class="panel">
                <div>allData: 40</div>
                <div>data: {{data}}</div>
                <div>page: {{page}}</div>
                <div>pageSize: {{pageSize}}</div>
                <div>pageCount: {{pageCount}}</div>

                <button @click="pageSizeChange(8)">pageSize8</button>
                <button @click="pageSizeChange(10)">pageSize10</button><br/>

                <button v-for="(item,index) in pages" 
                        :key="index" 
                        @click="pageChange(item)">
                        page{{item}}
                </button>
            </div> <br />
        </div>
    `,
    setup() {
        let { page, pageSize, pageCount, pageChange, pageSizeChange, callback } = usePagination()

        page.value = 1
        pageSize.value = 10

        const data = ref("")
        callback.value = function(){
            pageCount.value = 40 / pageSize.value
            data.value = `data of pageSize:${pageSize.value} page:${page.value}`
        }

        onMounted(()=>{
            callback.value()
        })

        const pages = computed(()=>{
            let d = []
            for(let i=0;i<pageCount.value;i++){
                d.push(i+1)
            }
            return d
        })

        return {
            page, pageSize, pageCount, pageChange, pageSizeChange, 
            data, pages
        }
    }
})

storiesOf('UI|usePagination', module)
    .add('pagination', () => Count, {
        readme: {
            sidebar: md
        }
    })
