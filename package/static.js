export function useStatic() {

    const limit = window.screen.height == window.screen.availHeight ? 1.8 : 1.65
    const rate = window.screen.height / window.screen.width

    const isFullScreen = false
    if (rate > limit) isFullScreen.value = true

    return {
        rate,
        isFullScreen,
        dpr: window.devicePixelRatio,
        updateInterval: window.screen.updateInterval || -1
    }
}