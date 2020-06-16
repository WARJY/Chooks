### useStatic

> 提供屏幕比例，是否全面屏，dpr，刷新率等的静态hook

#### Type
```ts
function useStatic(): {
    rate: number
    isFullScreen: boolean
    dpr: number
    updateInterval: number
}
```

#### Return
- rate &mdash; 屏幕宽高比
- isFullScreen &mdash; 屏幕是否全面屏
- dpr &mdash; 屏幕dpr
- updateInterval &mdash; 屏幕刷新率

#### Example
```js
import { useStatic, useStore } from 'chooks'
export default {
    setup(prop:any, context:SetupContext){
        //静态hook，可用于全局设置
        const { isFullScreen, dpr } = useStatic()

        const { state, commit } = useStore(context)
        commit("setGlobalSetting" ,{
            isFullScreen: isFullScreen,
            dpr: dpr,
        })

        return { 
            isFullScreen, dpr
        }
    }
}
```