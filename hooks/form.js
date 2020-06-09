import { watch } from "@vue/composition-api"
import dataValid from "../utils/dataValid"
import is from "../utils/is"

export function useForm(useFormOptions) {

    //储存默认值
    const state = {}
    Object.keys(useFormOptions.fields).forEach(field => {
        state[field] = useFormOptions.fields[field].value
    })
    const defaultState = { ...state }

    //设置值
    const set = function (data) {
        Object.keys(useFormOptions.fields).forEach(field => {
            useFormOptions.fields[field].value = data[field]
        })
    }

    //重置
    const reset = function () {
        Object.keys(useFormOptions.fields).forEach(field => {
            useFormOptions.fields[field].value = defaultState[field]
        })
        if (useFormOptions.autoReset) commit()
    }

    //验证
    const valid = useFormOptions.valid ?
        function () {
            let state = {}
            Object.keys(useFormOptions.fields).forEach(field => {
                state[field] = useFormOptions.fields[field].value
            })
            return dataValid({ ...state }, useFormOptions.valid)
        }
        : function () { return true }

    //提交
    const commit = useFormOptions.commit ?
        function () {
            let timer = setTimeout(() => {
                let cb = useFormOptions.commit
                clearTimeout(timer)
                cb(valid(), state)
            }, 0)
        } : function () { return valid() }

    //自动提交
    let commitList = []
    if (useFormOptions.autoCommit === true) commitList = Object.keys(useFormOptions.fields)
    if (is(useFormOptions.autoCommit) === Array) commitList = useFormOptions.autoCommit
    commitList.forEach(prop => {
        watch(() => useFormOptions.fields[prop].value, function (val, old) {
            if (val == old) return
            let timer = setTimeout(() => {
                clearTimeout(timer)
                commit()
            }, 0)
        })
    })

    return {
        set,
        reset,
        valid,
        commit
    }
}