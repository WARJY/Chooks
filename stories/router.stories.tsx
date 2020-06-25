import { storiesOf } from '@storybook/vue'
import { defineComponent, ref } from '@vue/composition-api'

import { useRouter } from '../index'
import md from '../docs/router.md'

const Count = defineComponent({
    setup(props, context) {
        return {}
    }
})

storiesOf('Plus|useRouter', module)
    .add('router', () => Count, {
        readme: {
            content: md
        }
    })
