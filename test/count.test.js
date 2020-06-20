import Vue from 'vue'
import compositionAPI from '@vue/composition-api'
Vue.use(compositionAPI)

import { useCount } from "../index"

describe("test useCount", () => {

    test("test normal count", () => {
        const { count, change, min, max } = useCount()
        count.value = 0
        max.value = 2
        change(1)
        expect(count.value).toBe(1)
        change(10)
        expect(count.value).toBe(2)
        change(-1)
        expect(count.value).toBe(1)
    })

    test("test countDown", async () => {
        const { count, countDown } = useCount()
        count.value = 30
        countDown(500, 1).then(data=>{
            expect(count.value).toBe(0)
        })
        new Promise(r=>setTimeout(r(),600)).then(data=>{
            expect(count.value).toBe(29)
        })
    })
})