import { watch, reactive, ref, watchEffect } from "@vue/composition-api"
import dataValid from "../utils/dataValid"
import is from "../utils/is"

export function useForm() {
    //表单字段
    const fields = ref({})

    //规则
    const rules = ref({})

    //存储默认值
    let defaultState;
    let flag = false
    let stopDefault = watchEffect(()=>{
        if(flag === true) stopDefault()
        if(JSON.stringify(fields.value) !== '{}' && flag === false){
            defaultState = {...fields.value}
            flag = true
        }
    },{
        flush: 'sync'
    })

    //重置
    const reset = function (flag) { 
        fields.value = defaultState
        if(flag === true) commit.value()
    }

    //验证
    const valid = function () { return dataValid(fields.value, rules.value) }

    //提交
    const commit = ref(function(){})

    //自动提交
    let stopList = []
    const setAutoCommit = function (commitOption) {
        let commitList = []
        if (commitOption === true) commitList = Object.keys(fields.value)
        if (is(commitOption) === Array) commitList = commitOption
        if (commitList.length > 0) {
            let flag = {}
            commitList.forEach(field => {
                flag[field] = false
            })
            commitList.forEach(prop => {
                let stop = watch(() => fields.value[prop], function (val, old) {
                    if (flag[prop] === false) return flag[prop] = true
                    if (val == old) return
                    commit.value()
                })
                stopList.push(stop)
            })
        }
        return stop
    }

    //停止自动提交
    const stop = function(){
        if(stopList.length === 0) return
        stopList.forEach(s=>s())
    }

    return {
        fields,
        rules,
        reset,
        valid,
        commit,
        setAutoCommit
    }
}