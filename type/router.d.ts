import { SetupContext } from '@vue/composition-api'

export function useRouter(context:SetupContext): {
    refresh():void,
    back():void,
    replace(target:string):void,
    push(target:string, query:any):void,
    getQuery():any
}