import { storiesOf } from '@storybook/vue'
import { defineComponent, computed } from '@vue/composition-api'

import { useCubicBezier } from '../index'
import md from '../docs/cubicBezier.md'

const Demo = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">

                <div>bezier: {{bezier}}</div>
                <div>easing: easeInQuad</div>
                <div>fps: 60</div>
                <div>duration: 2000</div>

                <div class="block" :style="scaleFade">scale&fade</div>
                <div class="block bezier" :style="runFade">fade&run</div>

                <button @click="go">go</button>&nbsp;
                <button @click="stop">stop</button>&nbsp;
                <button @click="() => bezier = 0">reset</button>
                
            </div>
        </div>
    `,
    setup() {
        const { bezier, run, stop } = useCubicBezier(60)

        const go = function () {
            run(2000, "easeInQuad").then()
        }

        // 缩放&渐隐
        const scaleFade = computed(() => {
            return {
                transform: `scale(${1 - bezier.value})`,
                opacity: 1 - bezier.value
            }
        })

        // 移动&渐隐
        const runFade = computed(() => {
            return {
                left: 130 + bezier.value * 200 + 'px',
                top: 145 - bezier.value * 100 + 'px',
                opacity: 1 - bezier.value
            }
        })

        return {
            bezier, go, stop,
            scaleFade, runFade
        }
    }
})

storiesOf('UI|useCubicBezier', module)
    .add('cubicBezierMuti', () => Demo, {
        readme: {
            sidebar: md
        },
    })