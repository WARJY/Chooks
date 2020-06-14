import Vue from 'vue'
import compositionAPI, { ref } from '@vue/composition-api'
Vue.use(compositionAPI)
import { useSelect } from '../index'

describe("test useSelect", () => {

    test("test remote select", () => {
        let { options, select, selected } = useSelect("id")
        const keyChange = function(keyword){
            options.value = [
                { id: 1 },
                { id: 2 },
                { id: 3 },
            ]
        }
        keyChange("run")
        select({id: 1})
        expect(selected.value).toStrictEqual({id: 1})
    })

    test("test single select", () => {
        const { options, selected, select } = useSelect("id")
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        select({id: 1})
        expect(selected.value).toStrictEqual({id: 1})
    })

    test("test muti select", () => {
        const { muti, options, selected, select, remove } = useSelect("id")
        muti.value = true
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        select({id: 1})
        expect(selected.value).toStrictEqual([{id: 1}])
        select({id: 1}, true)
        select({id: 1}, true)
        select({id: 1}, true)
        expect(selected.value).toStrictEqual([{id: 1}])
        select({id: 1})
        expect(selected.value).toStrictEqual([{id: 1},{id: 1}])
        select({id: 2}, true)
        select({id: 2}, true)
        expect(selected.value).toStrictEqual([{id: 1},{id: 1},{id: 2}])
        remove({id:1})
        expect(selected.value).toStrictEqual([{id: 1},{id: 2}])
        remove({id:1}, true)
        expect(selected.value).toStrictEqual([{id: 2}])
    })
})
