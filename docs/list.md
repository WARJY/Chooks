### useList

> 为【列表】添加滚动及虚拟列表功能

#### Type

```ts
function useList(padding: number): {
    data: Ref<Array<any>> | []
    itemHeight: Ref<number>
    size: Ref<number>
    renderData: Ref<Array<any>> | []
    scroll(scrollTop:number): void
    top: Ref<number>
    el: Ref<HTMLElement>
    toTop(): void
}
```

#### Params
- padding &mdash; 虚拟列表的临界数据 item 数量

#### Return
- data &mdash; 虚拟列表的所有数据
- renderData &mdash; 虚拟列表渲染的数据
- itemHeight &mdash; 虚拟列表每项的高度
- size &mdash; 虚拟列表显示的 item 数量
- onScroll(e) &mdash; 滚动函数，事件通过参数传入
- top &mdash; 虚拟列表距离容器顶部的距离
- el &mdash; 虚拟列表的 ref HTML 对象
- toTop() &mdash; 虚拟列表回到顶部函数（必须指定有效的 el 才能使用）

#### Example

```js
import { useList } from 'chooks'
export default {
    setup(){
        const { data, renderData, scroll, top, itemHeight, size, el, toTop } = useList();

        let all = [];
        for (let i = 0; i < 10000; i++) {
            all.push(i);
        }
        data.value = all
        itemHeight.value = 20
        size.value = 10

        const onScroll = function(e){
            scroll(e.target.scrollTop)
        }

        return {
            data,
            renderData,
            itemHeight,
            size,
            onScroll,
            top,
            view: el,
            toTop
        }
    },
    render(){
        return (
            <div class="view" ref="view" :style="{height:size*itemHeight + 'px'}" @scroll="onScroll">
                <div class="container" :style="{height:data*itemHeight + 'px'}">
                    <div class="item-box" :style="{top:top + 'px'}">
                        <div class="item" v-for="(item,index) in renderData" :key="index">{{item}}</div>
                    </div>
                </div>
            </div>
        )
    }
}
```
