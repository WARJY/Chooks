import { Ref } from '@vue/composition-api';

export function useSelect(muti: boolean, callback: Function): {
    select: Ref<any>,
    selectArr: Ref<any[]>,
    loading: Ref<boolean>,
    selectFun(val: any): void
}