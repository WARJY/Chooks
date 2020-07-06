import { ref } from '@vue/composition-api';

export function useSelect(uniqueId) {

    const muti = ref(false)
    const options = ref([])
    const selected = ref([])

    const select = function (item, filter) {
        if (!item) return
        if (muti.value === false) return selected.value = item
        if (muti.value === true && filter !== true) return selected.value.push(item)
        if (muti.value === true && filter === true) {
            let exit = selected.value.some(i => {
                if (uniqueId) return i[uniqueId] === item[uniqueId]
                if (!uniqueId) return JSON.stringify(i) === JSON.stringify(item)
            })
            if (!exit) selected.value.push(item)
        }
    }

    const remove = function (item, removeAll) {
        if (!item) return
        if (removeAll === true) return selected.value = selected.value.filter((i, index) => {
            if (uniqueId) return i[uniqueId] !== item[uniqueId]
            if (!uniqueId) return JSON.stringify(i) !== JSON.stringify(item)
        })
        try {
            selected.value.forEach((i, index) => {
                if (uniqueId && i[uniqueId] === item[uniqueId]) throw selected.value.splice(index, 1)
                if (!uniqueId && JSON.stringify(i) === JSON.stringify(item)) throw selected.value.splice(index, 1)
            })
        } catch (error) { }
    }

    const selectAll = function () {
        if (muti.value === false) return
        selected.value = options.value
    }

    const removeAll = function () {
        if (muti.value === false) return
        selected.value = []
    }

    const isSelected = function (item) {
        if(muti.value === false){
            if(uniqueId) return selected.value[uniqueId] === item[uniqueId]
            if(!uniqueId) return JSON.stringify(selected.value) === JSON.stringify(item)
        }
        if(muti.value === true){
            return selected.value.some(i=>{
                if(uniqueId) return i[uniqueId] === item[uniqueId]
                if(!uniqueId) return JSON.stringify(i) === JSON.stringify(item)
            })
        }
    }

    return {
        muti,
        options,
        selected,
        select,
        selectAll,
        remove,
        removeAll,
        isSelected
    }
}