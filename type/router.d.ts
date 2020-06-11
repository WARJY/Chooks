import { SetupContext } from '@vue/composition-api'
import VueRouter, { Route } from 'vue-router/types'

export function useRouter(context:SetupContext): {
    router: VueRouter
    route: Route
    go(index:number):void
    replace(target:string, query?:any):Promise<any>
    push(target:string, query?:any):Promise<any>
    getQuery():any
}