import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useStatic } from '../index'
import md from '../docs/static.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">
                <div>屏幕长宽比: {{rate}}</div>
                <div>是否全面屏: {{isFullScreen}}</div>
                <div>屏幕dpr: {{dpr}}</div>
                <div>屏幕刷新率: {{updateInterval}}</div>
            </div> <br /> 
        </div>
    `,
    setup() {
        const { rate, isFullScreen, dpr, updateInterval } = useStatic()

        return {
            rate, isFullScreen, dpr, updateInterval
        }
    }
})

storiesOf('Plus|useStatic', module)
    .add('static', () => Count, {
        readme: {
            sidebar: md
        }
    })
