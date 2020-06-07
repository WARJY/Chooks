import { ref } from '@vue/composition-api';

export function useStore(context, module){
    let store = context.root.$store

    let state = ref(store.state)
    let commit = store.commit
    let dispatch = store.dispatch

    if(module) state = state.module

    return {
        state,
        commit,
        dispatch
    }
}