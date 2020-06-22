import Vue from 'vue'
import compositionAPI, { ref, reactive } from '@vue/composition-api'
Vue.use(compositionAPI)

import { useList } from '../hooks/list'

test('test useList', async () => {
    const { data, renderData, scroll, top, itemHeight, size } = useList(1)

    let all = []
    for (let i = 0; i < 100000; i++) {
        all.push(i)
    }
    data.value = all
    itemHeight.value = 20
    size.value = 10

    await Promise.resolve(true).then(data => {
        expect(top.value).toBe(0)
        expect(renderData.value.length).toBe(12)
        expect(renderData.value[0]).toBe(0)
        expect(renderData.value[11]).toBe(11)
    })

    scroll(300)

    await Promise.resolve(true).then(data => {
        expect(top.value).toBe(280)
        expect(renderData.value.length).toBe(12)
        expect(renderData.value[0]).toBe(15)
        expect(renderData.value[11]).toBe(26)
    })

})