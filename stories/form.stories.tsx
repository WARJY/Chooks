import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useForm } from '../index'
import md from '../docs/form.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - national form</div>
            <div class="panel">
                <div>用户名: {{fields.userName}}</div>
                <div>电子邮箱: {{fields.email}}</div>
                <div>类型: {{fields.type}}</div><br/>

                <div>用户名：&nbsp;&nbsp;
                    <input class="input" v-model="fields.userName" />
                </div>
                <div>电子邮箱：
                    <input class="input" v-model="fields.email" />
                </div>
                <div>类型：&nbsp;&nbsp;&nbsp;
                    <select class="input" v-model="fields.type">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>

                <div>count: {{count}}</div>
                <button @click="commit">commit</button>
                <button @click="reset">reset</button>
                
            </div> <br />
        </div>
    `,
    setup() {
        const { fields, rules, reset, valid, commit } = useForm()
        fields.value = {
            userName: "",
            email: "",
            type: "A"
        }
        const count = ref(0)
        commit.value = function(){
            count.value += 1
        }

        return {
            fields, reset, commit, count
        }
    }
})

storiesOf('UI|useForm', module)
    .add('form', () => Count, {
        readme: {
            sidebar: md
        }
    })
