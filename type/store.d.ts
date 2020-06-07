import { SetupContext, Ref } from '@vue/composition-api';

export function useStore(context: SetupContext, module?: string): {
    state: Ref<any>,
    commit(mutation: string, arg?: any): void,
    dispatch(action: string, arg?: any): Promise<any>
}