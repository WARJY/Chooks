import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useCount } from '../index'
import md from '../docs/count.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - national counter</div>
            <div class="panel">
                <div>count: {{count}}</div>
                <div>min: {{min}}</div>
                <div>max: {{max}}</div>
                <button @click="change(-1)">-1</button>&nbsp;
                <input v-model="count"></input>&nbsp;
                <button @click="change(1)">+1</button>&nbsp;
            </div> <br />
        </div>
    `,
    setup() {
        //national counter
        const { count, change, min, max } = useCount()
        count.value = 10
        min.value = 10
        max.value = 100

        return {
            count, min, max, change,
        }
    }
})

storiesOf('UI|useCount', module)
    .add('count', () => Count, {
        readme: {
            sidebar: md
        }
    })
