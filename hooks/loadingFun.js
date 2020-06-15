import { ref } from "@vue/composition-api"

export function useLoadingFun(fun, timeOut=10000){

    const loading = ref(false)
    let timer;

    const loadingFun = async function(...rest){
        loading.value = true
        await fun(rest)
        loading.value = false
    }

    return {
        loading,
        fun: loadingFun
    }
}