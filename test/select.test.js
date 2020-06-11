import { useSelect } from '../index'

describe("test useSelect", () => {

    test("test single select", () => {
        const { options, selected, select } = useSelect("id")
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        select({id: 1})
        expect(selected.value).toStrictEqual({id: 1})
    })

    test("test muti select", () => {
        const { options, selected, select, remove } = useSelect("id", true)
        options.value = [
            { id: 1 },
            { id: 2 },
            { id: 3 },
        ]
        select({id: 1})
        expect(selected.value).toStrictEqual([{id: 1}])
        select({id: 1}, true)
        select({id: 1}, true)
        select({id: 1}, true)
        expect(selected.value).toStrictEqual([{id: 1}])
        select({id: 1})
        expect(selected.value).toStrictEqual([{id: 1},{id: 1}])
        select({id: 2}, true)
        select({id: 2}, true)
        expect(selected.value).toStrictEqual([{id: 1},{id: 1},{id: 1},{id: 2}])
        remove({id:1})
        expect(selected.value).toStrictEqual([{id: 1},{id: 1},{id: 2}])
        remove({id:1}, true)
        expect(selected.value).toStrictEqual([{id: 2}])
    })
})
