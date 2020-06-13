import Vue from 'vue'
import compositionAPI, { ref, reactive } from '@vue/composition-api'
import { useForm } from '../index'
Vue.use(compositionAPI)

describe('test useForm', () => {
    let { fields, rules, reset, valid, commit, setAutoCommit } = useForm()
    fields.value = {
        "用户名": ""
    }
    rules.value = {
        "用户名": ["empty"]
    }

    commit.value = function () {
        console.log("commit")
    }

    test('test valid', () => {
        expect(valid()).toStrictEqual({ "用户名": ['用户名不能为空'] })
        fields.value["用户名"] = 1
        expect(valid()).toStrictEqual(true)
    })

    test('test reset', () => {
        reset()
        expect(fields.value["用户名"]).toStrictEqual("")
    })

    test('test autoCommit', () => {
        const stop = setAutoCommit(true)
        fields.value.a = 2
        stop()
    })
    
})