import Vue from 'vue'
import compositionAPI, { ref } from '@vue/composition-api'
import { useForm } from '../hooks/form'
Vue.use(compositionAPI)

describe('test useForm', () => {

    const formFields = {
        userName: ref(""),
        phone: ref(""),
        email: ref(""),
        hasSub: ref(""),
    }

    const commitFun = async function (result) {
        if (result !== true) return
        await new Promise(r => {
            setTimeout(() => {
                r(true)
            }, 1000)
        }).then(data => {
            expect(data).toBe(true);
        })
    }

    const { set, reset, valid, commit } = useForm({
        fields: formFields,
        valid: {
            "用户名": [],
            "手机号码": ["empty", "phone"],
            "电子邮件": ["empty", "email"],
            "是否关注": ["empty", [true, false]],
        },
        commit: commitFun
    })

    //测试set方法
    test("test function set", () => {
        set({
            userName: "testUserName",
            phone: "15555555555",
            email: "test@test.com",
            hasSub: true
        })
        expect(formFields.userName.value).toBe("testUserName")
        expect(formFields.phone.value).toBe("15555555555")
        expect(formFields.email.value).toBe("test@test.com")
        expect(formFields.hasSub.value).toBe(true)
    })

    //测试reset方法
    test("test function reset", () => {
        reset()
        expect(formFields.userName.value).toBe("")
        expect(formFields.phone.value).toBe("")
        expect(formFields.email.value).toBe("")
        expect(formFields.hasSub.value).toBe("")
    })

    //测试valid方法
    test("test function valid", () => {
        expect(valid()).toStrictEqual([
            ['手机号码不能为空', '请输入正确的手机号'],
            ['电子邮件不能为空', '请输入正确的邮箱地址'],
            ['是否关注不能为空', '是否关注不合法']
        ])

        formFields.phone.value = "20000000000"
        expect(valid()).toStrictEqual([
            ['请输入正确的手机号'],
            ['电子邮件不能为空', '请输入正确的邮箱地址'],
            ['是否关注不能为空', '是否关注不合法']
        ])

        formFields.phone.value = "15555555555"
        expect(valid()).toStrictEqual([
            ['电子邮件不能为空', '请输入正确的邮箱地址'],
            ['是否关注不能为空', '是否关注不合法']
        ])

        formFields.email.value = "test.com"
        expect(valid()).toStrictEqual([
            ['请输入正确的邮箱地址'],
            ['是否关注不能为空', '是否关注不合法']
        ])

        formFields.email.value = "test@test.com"
        expect(valid()).toStrictEqual([
            ['是否关注不能为空', '是否关注不合法']
        ])

        formFields.hasSub.value = true
        expect(valid()).toStrictEqual(true)
    })

    //测试commit方法
    test("test function commit", async () => {
        await commit()
    })

    //测试autoCommit
    test("test autoCommit", async () => {
        let count = 0

        const formFields = {
            userName: ref(""),
            phone: ref("15555555555"),
            email: ref("test@test.com"),
            hasSub: ref(false),
        }

        const autoCommitFun = function (result) {
            if (result !== true) return
            count += 1
        }

        const { set, reset, valid, commit } = useForm({
            fields: formFields,
            valid: {
                "用户名": [],
                "手机号码": ["empty", "phone"],
                "电子邮件": ["empty", "email"],
                "是否关注": ["empty", [true, false]],
            },
            commit: autoCommitFun,
            autoCommit: ["userName"]
        })

        formFields.userName.value = "1"

        await new Promise(r => {
            setTimeout(() => {
                r()
            }, 100)
        }).then(() => {
            expect(count).toBe(1)
        })
    })

})