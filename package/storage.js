const storageAvailable = function(storage) {
    try {
        storage = window[type]
        let x = '__storage_test__'
        storage.setItem(x, x)
        storage.removeItem(x)
        return true
    }
    catch(e) {
        console.error("当前环境不支持storage")
        return false
    }
}

export function useStorage(storage, option) {

    if(storageAvailable(storage) !== true) return

    const keyBase = option.keyBase || ""
    const expires = option.expires || 0

    const get = function (key) {
        let currentKey = keyBase + key

        try {
            let o = JSON.parse(storage.getItem(currentKey))
            if (!o || o.expires < Date.now()) return null
            else return o.value
        } catch (e) {
            return storage[currentKey]
        } finally { }
    }

    const set = function (key, value, expi) {
        let currentKey = keyBase + key
        let currentExp = expires || expi || 0

        if (!value) return storage.removeItem(currentKey)

        let exp = new Date()
        storage.setItem(currentKey, JSON.stringify({
            value,
            expires: exp.getTime() + currentExp
        }))
    }

    const remove = function (key) {
        let currentKey = keyBase + key
        storage.removeItem(currentKey)
    }

    return {
        get,
        set,
        remove
    }
}