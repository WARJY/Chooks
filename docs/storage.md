### useStorage

> 为【storage】提供过期时间，get，set等函数

#### Type
```ts
type useStorageOption = {
    keyBase?: string
    expires?: number
}
function useStorage(storage: WindowLocalStorage | WindowSessionStorage, option?: useStorageOption): {
    get(key: string): any
    set(key: string, value: any, expi?: number): void
    remove(key: string): void
}
```

#### Params
- storage &mdash; 供使用的storage（WindowLocalStorage或WindowSessionStorage）
- option &mdash; storage使用参数
    - keyBase &mdash; storage中存储键的前缀，防止重复添加
    - expires &mdash; storage中存储的默认过期时间，单位为秒，默认为0

#### Return
- get(key) &mdash; 获取某个键对应的值，若失效则返回null
- set(key,value,expi) &mdash; 为某个键设置值及失效时间
- remove(key) &mdash; 移除某个键对应的值

#### Example
```js
import { useStorage} from 'chooks'
export default {
    setup(){
        const { get, set, remove } = useStorage({
            keyBase: "test",
            expires: 10000
        })

        set("a", 1, 10)
        get("a")
        remove("a")

        return {}
    }
}
```