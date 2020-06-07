export interface useFormOptions {
    valid?: Object,
    commit?: Function,
    autoCommit?: Boolean | string[] | [][] | Function[],
    autoReset?: Boolean,
    fields: Object
}

export function useForm(useFormOptions:useFormOptions):{
    set:Function,
    reset:Function,
    valid:Function,
    commit:Function
}