import { storiesOf, addParameters } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { action } from '@storybook/addon-actions'
import { useCount } from '../index'
import md from '../docs/count.md'

const Demo = defineComponent({
    setup() {
        //普通计数
        const { count, change, min, max } = useCount()
        count.value = 10
        min.value = 10
        max.value = 100

        //倒计时
        const { count: count2, countDown, stop } = useCount()
        count2.value = 10

        const complete = ref("未完成")
        const start = function () {
            action("countDown Start")
            countDown(1000, 1).then(data => {
                complete.value = "已完成"
            })
        }
        const reset = function () {
            stop.value()
            complete.value = "未完成"
            count2.value = 10
        }

        return {
            count, min, max, change,
            count2, complete, start, reset
        }
    },
    render(this) {
        let { count, count2, min, max, change, start, reset, complete } = this
        return (
            <div onClick={action('button click')}>
                <div>currentCount: {count}</div>
                <div>min: {min}</div>
                <div>max: {max}</div>
                <button onClick={change.bind(this, 1)}>+1</button> &nbsp;
                <button onClick={change.bind(this, -1)}>-1</button> &nbsp;
                <button onClick={change.bind(this, 10)}>+10</button> &nbsp;
                <button onClick={change.bind(this, -10)}>-10</button> <br /><br />

                <div>countDown: {count2}</div>
                <div>countDownComplete: {complete}</div>
                <button onClick={start}>start</button> &nbsp;
                <button onClick={reset}>reset</button>
            </div>
        )
    }
})

storiesOf('UI', module)
    .addParameters({
        readme: {
            sidebar: md
        }
    })
    .add('useCount', () => Demo)