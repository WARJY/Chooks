import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useStorage } from '../index'
import md from '../docs/storage.md'

const Count = defineComponent({
    setup() {
        // const { get, set, remove } = useStorage(localStorage, {
        //     keyBase: "test",
        //     expires: 1000
        // })

        // set("i'm key", "i'm value", 1000 * 60)
        // get("i'm key")
        // remove("i'm key")

        // return {}
    }
})

storiesOf('Communication|useStorage', module)
    .add('storage', () => Count, {
        readme: {
            content: md
        }
    })
