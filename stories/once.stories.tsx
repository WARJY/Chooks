import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useEmitter } from '../index'
import md from '../docs/emitter.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE</div>
            <div class="panel">
                <div>message: {{message}}</div>
                <div>isSubed: {{isSub}}</div>
                <button @click="messageOn">on</button>
                <button @click="messageEmit('this is message')">emit</button>
                <button @click="messageEmit('this is message2')">emit2</button>
                <button @click="messageOff">off</button>
            </div> <br /> 
        </div>
    `,
    setup() {
        const { on, once, off, emit, isSubed } = useEmitter()

        const message = ref("")
        const isSub = ref(false)
        const run = function (data) {
            message.value = data
        }

        const messageOn = function(){
            once("message", run)
            isSub.value = isSubed("message", run)
        }
        const messageOff = function(){
            if(!isSubed("message", run)) return
            off("message", run)
            isSub.value = isSubed("message", run)
        }
        const messageEmit = function(msg){
            emit("message", msg)
            isSub.value = isSubed("message", run)
        }

        return {
            isSub, message, messageEmit, messageOn, messageOff
        }
    }
})

storiesOf('Communication|useEmitter', module)
    .add('once', () => Count, {
        readme: {
            sidebar: md
        }
    })
