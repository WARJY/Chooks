export interface useFormOptions<State> {
    valid?: {
        [index:string]: [] | string[] | [][] | Function[],
    },
    commit(result: boolean | string[]):void,
    autoCommit?: boolean | string[],
    autoReset?: boolean,
    fields: State
}

export function useForm<State>(useFormOptions:useFormOptions<State>):{
    set(data:State):void,
    reset():void,
    valid():void,
    commit():void
}