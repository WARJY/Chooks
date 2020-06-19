import { Ref } from '@vue/composition-api';

export function useList(padding?= 1): {
    data: Ref<Array<any>> | []
    itemHeight: Ref<number>
    size: Ref<number>
    renderData: Ref<Array<any>> | []
    onScroll(event:HTMLElementEventMap):void
    top: Ref<number>
    el: Ref<HTMLElement>
    toTop():void
}