### useEmitter

> 提供一个的订阅-发布模式机制

#### Type
```ts
function useEmitter(): {
    on(eventType: string, handler: Function): void;
    once(eventType: string, handler: Function): void;
    emit(eventType: string, data: any): void;
    off(eventType: string, handler: Function): void;
    isSubed(eventType: string, handler: Function): boolean;
}
```

#### Return
- on(eventType,handler) &mdash; 订阅某个事件并传入回调函数
- once(eventType,handler) &mdash; 订阅某个事件并传入回调函数，此函数被触发一次后自动移除
- emit(eventType,data) &mdash; 发布某个事件，并传入data
- off(eventType,handler) &mdash; 移除某个事件中该函数的订阅
- isSubed(eventType,handler) &mdash; 返回该事件中是否订阅了该函数

#### Example
```js
import { useEmitter} from 'chooks'
export default {
    setup(){
        const { on, off, emit } = useEmitter()

        const cb = function(data){
            console.log(data)
        }
        const cb2 = function(data){
            console.log(data)
        }

        on("test", cb)
        on("test", cb2)
        emit("test")
        
        return {}
    }
}
```