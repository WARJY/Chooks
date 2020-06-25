import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useTimeoutFun } from '../index'
import md from '../docs/timeoutFun.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">
                <div>count: {{count}}</div>
                <div>finished: {{finished}}</div>
                <button @click="fun">tap me</button>
                <button @click="()=>finished=false">reset</button>
            </div>
        </div>
    `,
    setup() {
        const count = ref(0)
        const { fun, finished } = useTimeoutFun(function () {
            count.value += 1
        }, 1000)

        return {
            count,
            fun,
            finished
        }
    }
})

storiesOf('Function decorator|useTimeoutFun', module)
    .add('timeoutFun', () => Count, {
        readme: {
            sidebar: md
        }
    })
