import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useStore } from '../index'
import md from '../docs/store.md'

const Count = defineComponent({
    setup(props, context) {
        return {}
    }
})

storiesOf('Plus|useStore', module)
    .add('store', () => Count, {
        readme: {
            content: md
        }
    })
