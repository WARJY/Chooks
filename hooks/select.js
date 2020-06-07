import { ref } from '@vue/composition-api';

export function useSelect(muti=false, callback){

    let cb = callback

    const select = ref("")
    const selectArr = ref([])
    const loading = ref(false)
    const selectFun = async function(val){
        loading.value = true
        await cb(val)
        loading.value = false
    }
    
    return {
        select,
        selectArr,
        loading,
        selectFun
    }
}