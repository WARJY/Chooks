### useForm

> 为【表单】提供初始化数据，重置，数据验证，提交，自动提交等逻辑

#### Type
```ts
function useForm<T>(): {
    fields:Ref<T>
    rules:Ref<{ [K in keyof T]:Array<string | Array<any>> }>
    reset(autoCommit:boolean):void
    valid():boolean|T
    commit():Ref<Function>
    setAutoCommit(commitList:boolean|string[]):Function
}
```

#### Return
- fields &mdash; 表单字段
- rules &mdash; 表单验证规则：验证通过则返回true，否则返回失败原因tip的数组
    - key：字符串
    - key：应与fields中的键相对应
    - key：tip中作为该字段的释义，如```{ "手机号码": ["empty"] }``` 则tip为"手机号码不能为空"
    - value：数组
    - value：```[]``` 不验证
    - value：```["empty"]``` 非空验证
    - value：```[[1,2]]``` 枚举验证，表示只能为1或2
    - value：```["email", "phone", "tel, "url", "card"]``` 内置规则，分别表示电子邮箱，+86手机号码，座机号码，url地址和身份证号码
- reset(true) &mdash; 将表单的值重置为传入时fields的值，传入true则自动执行一次commit
- valid() &mdash; 表单验证，验证通过则返回true，否则返回失败原因tip的数组
- commit() &mdash; 表单提交函数
- setAutoCommit(true) &mdash; 设置自动commit，传入数组则只对数组中的字段自动commit，返回一个函数，执行后取消监听

#### Example
```js
import { ref, Ref, onMounted } from "@vue/composition-api";
import { useForm } from 'chooks'
export default {
    setup(){
        let { fields, rules, reset, valid, commit, setAutoCommit } = useForm()
        fields.value = {
            "用户名": ""
        }
        rules.value = {
            "用户名": ["empty"]
        }

        commit.value = function () {
            console.log("commit")
        }

        reset()

        valid()

        let stop = setAutoCommit(["用户名"])
        stop()

        return { 
            set, reset, commit
        }
    }
}
```