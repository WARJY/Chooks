import { Ref } from '@vue/composition-api';

export function useCount(): {
    count: Ref<number>
    min: Ref<number>
    max: Ref<number>
    change(val: number): void
    countDown(interval?: number, val?: number): Promise<true | Error>
    stop: Ref<Function>
}