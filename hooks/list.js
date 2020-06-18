import { ref, watch } from "@vue/composition-api"

export function useList() {
    let start = 0

    const data = ref([])
    const renderData = ref([])
    const top = ref(0)
    const el = ref(null)
    const itemHeight = ref(0)
    const size = ref(0)

    const onScroll = function (e) {
        if(e.preventDefault) e.preventDefault()
        let scrollTop = e.target.scrollTop
        if (!scrollTop) return
        start = (Math.floor(scrollTop / itemHeight.value) <= data.value.length - size.value) ? Math.floor(scrollTop / itemHeight.value) : data.value.length - size.value
        top.value = start * itemHeight.value
        renderData.value = data.value.slice(start, start + size.value)
    }

    watch([data, itemHeight, size], ([data, itemHeight, size]) => {
        top.value = start * itemHeight
        renderData.value = data.slice(start, start + size)
    })

    const toTop = function(){
        top.value = 0
        renderData.value = data.value.slice(0, size.value)
        el.value.scrollTo(0,0)
    }

    return {
        data,
        itemHeight,
        size,
        renderData,
        onScroll,
        top,
        el,
        toTop
    }
}