import Vue from 'vue'
import compositionAPI from '@vue/composition-api'
Vue.use(compositionAPI)

import { useTimeoutFun } from '../index'

test("test useTimeoutFun", async () => {

    let delayFun = function () {
        // console.log("complete")
    }

    const { finished, fun } = useTimeoutFun(delayFun, 1000)

    expect(finished.value).toBe(false)
    fun()
    await new Promise(r => setTimeout(r, 1000)).then()
    expect(finished.value).toBe(true)
})
