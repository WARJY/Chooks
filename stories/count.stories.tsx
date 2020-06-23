import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CompositionApi, { defineComponent } from '@vue/composition-api'
Vue.use(CompositionApi)

import '../.storybook/story.css'
import { useCount } from '../index'

const Demo = defineComponent({
    setup() {
        const { count, change, min, max } = useCount()
        count.value = 10
        return {
            count,
            min,
            max,
            change
        }
    },

    render(this) {
        let { count, min, max, change } = this
        return (
            <div>
                <div>currentCount: {count}</div>
                <div>min: {min}</div>
                <div>max: {max}</div>
                <button onClick={change.bind(this,1)}>+1</button> &nbsp; 
                <button onClick={change.bind(this,-1)}>-1</button> &nbsp; 
                <button onClick={change.bind(this,10)}>+10</button> &nbsp; 
                <button onClick={change.bind(this,-10)}>-10</button> <br/>
                <input type='text' v-model={this.min}></input>
            </div>
        )
    }
})

storiesOf('UI', module)
    .add('useCount', () => Demo)