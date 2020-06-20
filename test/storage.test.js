import { useStorage } from '../index'

test("test useStorage", async () => {

    const { get, set, remove } = useStorage(localStorage, {
        keyBase: "test",
        expires: 10
    })

    expect(get("a")).toBe(null)

    let value = {
        userName: "gcc"
    }
    set("a", value)
    expect(get("a")).toStrictEqual(value)
    await new Promise(r => setTimeout(() => r(), 10)).then()
    expect(get("a")).toBe(null)

    set("a", value)
    expect(get("a")).toStrictEqual(value)
    remove("a")
    expect(get("a")).toBe(null)
})