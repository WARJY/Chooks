import { useThrottleFun } from '../index'

test("test useThrottleFun", async () => {

    let count = 0

    let fun = async function () {
        await new Promise(r => {
            setTimeout(() => {
                r(true)
            }, 1000)
        }).then(data=>{
            count += 1
            expect(count).toBe(1)
        })
    }

    fun = useThrottleFun(fun, 1000)

    await fun()
    await fun()
    await fun()
    await fun()
    await fun()
    await fun()
})
