import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useLoadingFun, useDebounceFun } from '../index'
import md from '../docs/loadingFun.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">
                <div>count: {{count}}</div>
                <div>loading: {{loading}}</div>
                <button @click="fun">tap me</button>
            </div>
        </div>
    `,
    setup() {
        const count = ref(0)
        const run = async function () {
            await new Promise(r => setTimeout(r, 1000)).then(data => {
                count.value += 1
            })
        }
        const { fun, loading } = useLoadingFun(run, 1000)

        return {
            count,
            fun,
            loading
        }
    }
})

storiesOf('Function decorator|useLoadingFun', module)
    .add('loadingFun', () => Count, {
        readme: {
            sidebar: md
        }
    })
