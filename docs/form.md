### useForm

> 为【表单】提供初始化数据，重置，数据验证，提交，自动提交等逻辑

#### Type
```ts
interface useFormOptions<State> {
    valid?: {
        [index:string]: [] | string[] | [][] | Function[],
    },
    commit(result: boolean | string[]):void,
    autoCommit?: Boolean | string[],
    autoReset?: Boolean,
    fields: State
}

function useForm<State>(useFormOptions:useFormOptions<State>):{
    set(data:State):void,
    reset():void,
    valid():void,
    commit():void
}
```

#### Params
- useFormOptions
  - fields &mdash; 表单字段
  - valid &mdash; 表单验证规则：验证通过则返回true，否则返回失败原因tip的数组
    - key：字符串
    - key：通过字段定义的顺序与fields对应
    - key：tip中作为该字段的释义，如```{ "手机号码": ["empty"] }``` 则tip为"手机号码不能为空"
    - value：数组
    - value：```[]``` 不验证
    - value：```["empty"]``` 非空验证
    - value：```[[1,2]]``` 枚举验证，表示只能为1或2
    - value：```["email", "phone"]``` 内置规则，分别表示电子邮箱和+86手机号码
  - commit &mdash; 提交函数的回调函数，valid结果会以参数的形式传入
  - autoCommit &mdash; 是否自动commit，传入数组则只对数组中的字段自动commit
  - autoReset &mdash; 重置时是否自动commit

#### Return
- set(state) &mdash; 设置表单值的函数，传入数据格式必须符合fields定义的格式
- reset() &mdash; 将表单的值重置为传入时fields的值
- valid() &mdash; 表单验证，验证通过则返回true，否则返回失败原因tip的数组
- commit() &mdash; 表单提交函数

#### Example
```js
import { ref, Ref, onMounted } from "@vue/composition-api";
import { useForm } from 'chooks'
export default {
    setup(){
        //表单字段
        const formField = {
            phone: ref(""),
            email: ref(""),
            isMember: ref(false),
        }

        //提交函数
        const searchUser = function(result){
            if(result === true) store.dispatch("searchUser",{
                userName: formField.userName.value
            }).then(data=>{})
        }

        const { set, reset, valid, commit } = useForm({
            fields: formField,
            valid: {
                "手机号码": ["phone"],
                "邮箱": ["email"],
                "是否会员": ["empty", [true, false]]
            },
            commit: searchUser,
            autoCommit: ["phone"]
            autoReset: true,
        })

        onMounted(()=>{
            set({
                phone: "11",
                email: "22",
                isMember: true,
            })
            console.log(valid())
            commit()
            reset()
        })

        return { 
            set, reset, valid, commit
        }
    }
}
```