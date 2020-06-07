import { ref } from '@vue/composition-api';
import is from '../utils/is'

export function useTable(uniqueId) {
    const data = ref([])
    const select = ref([])
    const selectChange = function(val) {
        select.value = val
    }
    const selectFilter = function (selected) {
        if (is(selected) === Array) return selected.forEach(selEl => {
            if (uniqueId) {
                let exit = select.value.some(item => {
                    return item[uniqueId] === selEl[uniqueId]
                })
                if (!exit) select.value.push(selEl)
            }
            if (!uniqueId) {
                let exit = select.value.some(item => {
                    return item === selEl
                })
                if (!exit) select.value.push(selEl)
            }
        })
        if (uniqueId) {
            let exit = select.value.some(item => {
                return item[uniqueId] === selected[uniqueId]
            })
            if (!exit) select.value.push(selected)
        }
        if (!uniqueId) {
            let exit = select.value.some(item => {
                return item === selected
            })
            if (!exit) select.value.push(selected)
        }
    }

    return {
        data,
        select,
        selectChange,
        selectFilter
    }
}