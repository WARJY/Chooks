import { useEmitter } from '../index'

describe("test useEmitter", () => {

    const { on, once, emit, off, isSubed } = useEmitter()

    test("test normal emitter", async () => {
        let count = 0
        const data = "im data"
        const cb = function(res){
            count += 1
            expect(res).toBe(data)
        }

        on("normal", cb)
        expect(isSubed("normal", cb)).toBe(true)

        emit("normal", data)
        await Promise.resolve(true)
        expect(count).toBe(1)

        emit("normal", data)
        await Promise.resolve(true)
        expect(count).toBe(2)

        off("normal", cb)
        expect(isSubed("normal", cb)).toBe(false)
    })

    test("test once emitter", async () => {
        let count = 0
        const data = "im data"
        const cb = function(res){
            count += 1
            expect(res).toBe(data)
        }

        once("once", cb)
        expect(isSubed("once", cb)).toBe(true)

        emit("once", data)
        await Promise.resolve(true)
        expect(count).toBe(1)
        expect(isSubed("once", cb)).toBe(false)
    })
})