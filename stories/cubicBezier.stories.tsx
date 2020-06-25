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

                <div class="block" :style="fadeIn">i'm fadeIn</div>

                <div class="block" :style="fadeOut">i'm fadeOut</div>

                <div class="block bezier" :style="running">i'm running</div>

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

        // 渐显
        const fadeIn = computed(() => {
            return {
                opacity: bezier.value
            }
        })
        // 渐隐
        const fadeOut = computed(() => {
            return {
                opacity: 1 - bezier.value
            }
        })
        // 移动
        const running = computed(() => {
            return {
                left: 130 + bezier.value * 200 + 'px'
            }
        })

        return {
            bezier, go, stop,
            fadeIn, fadeOut, running
        }
    }
})

storiesOf('UI|useCubicBezier', module)
    .add('cubicBezier', () => Demo, {
        readme: {
            sidebar: md
        },
    })