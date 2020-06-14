import { Ref } from '@vue/composition-api';

export function useSelect(uniqueId?:any): {
    muti: Ref<boolean>
    select: Ref<any>
    options: Ref<Array<any>>
    select(item: any, filter?: boolean): void
    remove(item: any, removeAll?: boolean): void
}