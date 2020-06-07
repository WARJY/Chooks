import { Ref } from '@vue/composition-api';

export function useTable(uniqueId: string | number): {
    data: Ref<[]>,
    select: Ref<[]>,
    selectChange(selected: any): void,
    selectFilter(selected: any): void
}