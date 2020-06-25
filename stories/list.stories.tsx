import { storiesOf } from '@storybook/vue'
import { defineComponent, ref, computed } from '@vue/composition-api'

import { useList } from '../index'
import md from '../docs/list.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">
                <div>dataLength: {{data.length}}</div>
                <div>renderData: {{renderData}}</div>
                <div>size: {{size}}</div>
                <div>itemHeight: {{itemHeight}}</div>
                <button @click="toTop">toTop</button>
            </div><br/>
            <div class="panel" ref="view" :style="viewStyle" @scroll="onScroll">
                <div :style="containerStyle">
                    <div :style="offsetTop">
                        <div v-for="(item,index) in renderData" 
                            :style="{height:itemHeight + 'px'}" 
                            :key="index">
                            {{item}}
                        </div>
                    </div>
                </div>
            </div> <br />
        </div>
    `,
    setup() {
        const { data, renderData, scroll, top, itemHeight, size, el, toTop } = useList()

        let all = [];
        for (let i = 0; i < 10000; i++) {
            all.push(i);
        }
        data.value = all
        itemHeight.value = 20
        size.value = 10

        const viewStyle = computed(() => {
            return { 
                height: size.value * itemHeight.value + 'px',
                overflowY: "scroll"
            }
        })

        const containerStyle = computed(() => {
            return { 
                height: data.value.length * itemHeight.value + 'px',
                position: "relative"
            }
        })

        const offsetTop = computed(() => {
            return {
                top: top.value + 'px',
                position: "absolute"
            }
        })

        const onScroll = function (e) {
            scroll(e.target.scrollTop)
        }

        return {
            data, renderData, itemHeight, size, 
            onScroll, toTop,
            viewStyle, containerStyle, offsetTop, top,
            view: el,
        }
    }
})

storiesOf('UI|useList', module)
    .add('list', () => Count, {
        readme: {
            sidebar: md
        }
    })
