import Vue from 'vue'
import compositionAPI from '@vue/composition-api'
Vue.use(compositionAPI)

import { useLoadingFun } from '../index'

test("test useLoadingFun", async () => {

    let fetchData = async function () {
        expect(loading.value).toBe(true)
        await new Promise(r => {
            setTimeout(() => {
                r(true)
            }, 1000)
        }).then(data=>{})
    }

    const { loading, fun } = useLoadingFun(fetchData)

    expect(loading.value).toBe(false)
    await fun()
    expect(loading.value).toBe(false)
})
