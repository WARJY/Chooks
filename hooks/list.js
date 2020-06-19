import { ref, watch } from "@vue/composition-api"

export function useList(padding=1) {
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
        start = (Math.floor(scrollTop / itemHeight.value) <= data.value.length - size.value - padding) ? Math.floor(scrollTop / itemHeight.value) : data.value.length - size.value - padding
        top.value = (start - padding) * itemHeight.value
        top.value = top.value>0?top.value:0
        renderData.value = data.value.slice(start, start + size.value + padding*2)
    }

    watch([data, itemHeight, size], ([data, itemHeight, size]) => {
        top.value = (start - padding) * itemHeight
        top.value = top.value>0?top.value:0
        renderData.value = data.slice(start, start + size + padding*2)
    })

    const toTop = function(){
        top.value = 0
        renderData.value = data.value.slice(0, size.value + padding)
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