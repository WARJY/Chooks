import { ref } from '@vue/composition-api';

export function useStore(context, module){
    let store = context.root.$store

    if(!store) return console.error("使用useStore前请全局注入vuex")

    let state = store.state
    let commit = store.commit
    let dispatch = store.dispatch

    if(module) state = state.module

    return {
        state,
        commit,
        dispatch
    }
}