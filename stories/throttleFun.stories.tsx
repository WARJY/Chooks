import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useThrottleFun } from '../index'
import md from '../docs/throttleFun.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">
                <div>count: {{count}}</div>
                <button @click="run">tap me</button>
            </div>
        </div>
    `,
    setup() {
        const count = ref(0)
        const run = function () {
            count.value += 1
        }

        return {
            count,
            run: useThrottleFun(run, 1000)
        }
    }
})

storiesOf('Function decorator|useThrottleFun', module)
    .add('throttleFun', () => Count, {
        readme: {
            sidebar: md
        }
    })
