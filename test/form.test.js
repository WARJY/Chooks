import Vue from 'vue'
import compositionAPI, { ref, reactive } from '@vue/composition-api'
import { useForm } from '../index'
Vue.use(compositionAPI)

describe('test useForm', () => {
    let { fields, rules, reset, valid, commit, setAutoCommit } = useForm()
    fields.value = {
        a: ""
    }
    rules.value = {
        a: ["empty"]
    }

    commit.value = function () {
        console.log("commit")
    }

    test('test valid', () => {
        expect(valid()).toStrictEqual({ a: ['a不能为空'] })
        fields.value.a = 1
        expect(valid()).toStrictEqual(true)
    })

    test('test reset', () => {
        reset()
        expect(fields.value.a).toStrictEqual("")
    })

    test('test autoCommit', () => {
        const stop = setAutoCommit(true)
        fields.value.a = 2
        stop()
    })
    
})