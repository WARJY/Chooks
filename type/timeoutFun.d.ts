import { Ref } from '@vue/composition-api';

export function useTimeoutFun<T extends Function>(fun:T, timeOut:number):{
    finished: Ref<boolean>
    fun: T
}