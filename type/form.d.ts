import { Ref } from '@vue/composition-api';

export function useForm<T>(): {
    fields: Ref<T>
    rules: Ref<{ [K in keyof T]: Array<'empty' | 'tel' | 'phone' | 'email' | 'url' | 'card' | Array<any>> }>
    reset(autoCommit: boolean): void
    valid(): boolean | T
    commit(): Ref<Function>
    setAutoCommit(commitList: boolean | string[]): Function
}