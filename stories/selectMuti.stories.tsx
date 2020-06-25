import { storiesOf } from '@storybook/vue'
import { defineComponent, ref, computed, onMounted } from '@vue/composition-api'

import { useSelect } from '../index'
import md from '../docs/select.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="panel">
                <div>option: {{options}}</div>
                <div>selected: {{selected}}</div>
                <div>(click to remove)</div>
                <button @click="removeAll">removeAll</button>
                <button v-for="(item,index) in selected" 
                        :key="index"
                        @click="remove(item)">
                        {{item.id}}
                </button>
            </div> <br />

            <div class="title">EXAMPLE - default select</div>
            <div class="panel">
                <div>(click to select anyway)</div>
                <button @click="selectAll">selectAll</button>
                <button v-for="(item,index) in options" 
                        :key="index" 
                        @click="select(item)">
                        {{item.id}}
                </button>
            </div> <br />

            <div class="title">EXAMPLE - select width filter</div>
            <div class="panel">
                <div>(click to select width filter)</div>
                <button v-for="(item,index) in options" 
                        :key="index" 
                        @click="select(item, true)">
                        {{item.id}}
                </button>
            </div> <br />
        </div>
    `,
    setup() {
        const {
            muti, options, selected, 
            select, selectAll, remove, removeAll, isSelected 
        } = useSelect("id")
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        muti.value = true

        return {
            options, selected, 
            select, selectAll, remove, removeAll, isSelected
        }
    }
})

storiesOf('UI|useSelect', module)
    .add('selectMuti', () => Count, {
        readme: {
            sidebar: md
        }
    })
