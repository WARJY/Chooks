import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useCount } from '../index'
import md from '../docs/count.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - countDown</div>
            <div class="panel">
                <div>countDown: {{count}}</div>
                <div>countDownComplete: {{complete}}</div>
                <button @click="start">start</button> &nbsp;
                <button @click="stop">stop</button> &nbsp;
                <button @click="reset">reset</button>
            </div>
        </div>
    `,
    setup() {
        const { count, countDown, stop } = useCount()
        count.value = 10

        const complete = ref("incomplete")
        const start = function () {
            countDown(1000, 1).then(data => {
                complete.value = "complete"
            })
        }
        const reset = function () {
            stop.value()
            complete.value = "incomplete"
            count.value = 10
        }

        return {
            count, complete, start, stop, reset
        }
    }
})

storiesOf('UI|useCount', module)
    .add('countDown', () => Count, {
        readme: {
            sidebar: md
        }
    })
