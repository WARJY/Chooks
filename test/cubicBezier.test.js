import Vue from 'vue'
import compositionAPI from '@vue/composition-api'
Vue.use(compositionAPI)

import { useCubicBezier } from "../index"

test("test useCubicBezier", async () => {
    const { bezier, run } = useCubicBezier(60)

    await run(2000, "easeInQuad").then()

    expect(bezier.value).toBe(1)
})