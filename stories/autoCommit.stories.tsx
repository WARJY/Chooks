import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useForm } from '../index'
import md from '../docs/form.md'

const Count = defineComponent({
    template: `
        <div>
            <div class="title">EXAMPLE - from width autoCommit</div>
            <div class="panel">
                <div>用户名: {{fields.用户名}}</div>
                <div>电子邮箱: {{fields.电子邮箱}}</div>
                <div>类型: {{fields.类型}}</div><br/>

                <div>用户名：&nbsp;&nbsp;
                    <input class="input" v-model="fields.用户名" />
                    {{validRes.用户名?validRes.用户名[0]:""}}
                </div>
                <div>电子邮箱：
                    <input class="input" v-model="fields.电子邮箱" />
                    {{validRes.电子邮箱?validRes.电子邮箱[0]:""}}
                </div>
                <div>类型：&nbsp;&nbsp;&nbsp;
                    <select class="input" v-model="fields.类型">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                    {{validRes.类型?validRes.类型[0]:""}}
                </div>

                <div>count: {{count}}</div>
                <div>valid: {{validRes}}</div>
                <button @click="commit">commit</button>
                <button @click="reset">reset</button>
                
            </div> <br />
        </div>
    `,
    setup() {
        const { fields, rules, reset, valid, commit, setAutoCommit } = useForm()
        fields.value = {
            用户名: "",
            电子邮箱: "",
            类型: "A"
        }
        rules.value = {
            用户名: ["empty"],
            电子邮箱: ["empty", "email"],
            类型: ["empty", ["A", "B", "C"]]
        }
        setAutoCommit(true)

        const count = ref(0)
        const validRes = ref(false)
        commit.value = function(){
            validRes.value = valid() as boolean
            if(validRes.value === true) count.value += 1
        }

        return {
            fields, reset, commit, count, validRes
        }
    }
})

storiesOf('UI|useForm', module)
    .add('autoCommit', () => Count, {
        readme: {
            sidebar: md
        }
    })
