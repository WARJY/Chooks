import { storiesOf } from '@storybook/vue'
import { defineComponent, ref, computed, onMounted } from '@vue/composition-api'

import { useSelect } from '../index'
import md from '../docs/select.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - select</div>
            <div class="panel">
                <div>options: {{options}}</div>
                <div>selected: {{selected}}</div>
                input: <input type="text" @input="keyChange" />
                <select class="input" v-model="selected">
                    <option v-for="(item,index) in options" :key="index">{{item.id}}</option>
                </select>
            </div> <br />
        </div>
    `,
    setup() {
        let { options,  selected } = useSelect("id")
        const keyChange = function (keyword) {
            options.value = [
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]
        }

        return {
            keyChange, options, selected
        }
    }
})

storiesOf('UI|useSelect', module)
    .add('select', () => Count, {
        readme: {
            sidebar: md
        }
    })
