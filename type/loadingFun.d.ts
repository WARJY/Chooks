import { Ref } from '@vue/composition-api';

export function useLoadingFun<T extends Function>(fun:T, timeOut?:number):{
    loading: Ref<boolean>
    fun: T
}