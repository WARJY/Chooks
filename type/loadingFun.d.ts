import { Ref } from '@vue/composition-api';

export function useLoadingFun(fun:Function, timeOut?:number):{
    loading: Ref<boolean>
    fun: Function
}