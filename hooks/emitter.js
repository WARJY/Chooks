const handlers = {}

export function useEmitter() {

    const on = function (eventType, handler) {
        if (!handlers[eventType]) handlers[eventType] = []
        handlers[eventType].push(handler)
    }

    const once = function (eventType, handler) {
        handler.once = true
        on(eventType, handler)
    }

    const off = function (eventType, handler) {
        handlers[eventType].forEach((item, index) => {
            if (item === handler) handlers[eventType].splice(index, 1)
        })
    }

    const emit = function (eventType, data) {
        handlers[eventType].forEach(handler => {
            handler(data)
            if (handler.once === true) off(eventType, handler)
        })
    }

    const isSubed = function(eventType, handler){
        return handlers[eventType].indexOf(handler) > -1
    }

    return {
        on,
        once,
        emit,
        off,
        isSubed
    }
}