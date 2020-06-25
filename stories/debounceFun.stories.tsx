import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useDebounceFun } from '../index'
import md from '../docs/debounceFun.md'

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
            run: useDebounceFun(run, 1000)
        }
    }
})

storiesOf('Function decorator|useDebounceFun', module)
    .add('debounceFun', () => Count, {
        readme: {
            sidebar: md
        }
    })
