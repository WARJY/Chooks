# chooks  [![NPM version](https://img.shields.io/npm/v/chooks.svg)](https://www.npmjs.com/package/chooks)

基于 [`@vue/composition-api`](https://github.com/vuejs/composition-api) 的vue hooks函数

Vue 3.0还没有发布，但可以使用@vue/composition-api体验Vue 3.0的函数式编程以及较好的typescript支持

> @vue/composition-api以插件形式发布，并且完全向下兼容Vue 2.0

> chooks以纯函数方式调用，支持typescript类型检测，并且完全向下兼容Vue 2.0

## Install

```sh
npm install @vue/composition-api chooks

yarn add @vue/composition-api chooks
```

## Usage

```js
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';

Vue.use(VueCompositionAPI); // 使用前需引用@vue/composition-api插件
```

```jsx
<template>
    <div>
        <YourPaginationComponent 
        :page.sync="page" 
        :pageSize="pageSize" 
        :pageCount="pageCount" 
        @change="pageChange" />
    </div>
</template>
```

```js
<script lang="ts">
import { Ref, SetupContext } from '@vue/composition-api'
import { usePagination } from 'chooks'

export default {
  setup(prop:any, context:SetupContext) {
    /*
    usePagination函数包含了关于分页的数据和逻辑
    { 
        page: Ref<number>,
        pageSize: Ref<number>,
        pageCount: Ref<number>,
        pageChange(curPage:number): void
    } 
    */
    const { page, pageSize, pageCount, pageChange } = usePagination()

    //兼容Vue 2.0
    let oldData = context.root.oldData
    let oldMethod = context.root.oldMethod

    //生命周期函数会在Vue 2.0生命周期函数后执行
    onMounted(()=>{
        console.log("after mounted")
    })

    return { page, pageSize, pageCount, pageChange }
  },
  data(){
      return {
          oldData: "this is an old data defined by vue 2.0"
      }
  },
  mounted(){
      console.log("todo mounted")
  },
  methods: {
      oldMethod(){}
  }
}
<script>
```

## Hooks

- [`useDebounceFun`](https://github.com/WARJY/Chooks/blob/master/docs/debounceFun.md) &mdash; 为【函数】添加防抖功能的装饰器函数
- [`useThrottleFun`](https://github.com/WARJY/Chooks/blob/master/docs/throttleFun.md) &mdash; 为【函数】添加节流功能的装饰器函数
- [`useLoadingFun`](https://github.com/WARJY/Chooks/blob/master/docs/loadingFun.md) &mdash; 为【函数】添加等待功能的装饰器函数
- [`useSelect`](https://github.com/WARJY/Chooks/blob/master/docs/select.md) &mdash; 为【选项】提供单选，多选，选择变化等逻辑
- [`useForm`](https://github.com/WARJY/Chooks/blob/master/docs/form.md) &mdash; 为【表单】提供初始化数据，重置，数据验证，提交，自动提交等逻辑
- [`useList`](https://github.com/WARJY/Chooks/blob/master/docs/list.md) &mdash; 为【列表】添加滚动及虚拟列表功能
- [`usePagination`](https://github.com/WARJY/Chooks/blob/master/docs/pagination.md) &mdash; 为【分页】提供页码，页数，每页大小，页码变化等逻辑
- [`useRouter`](https://github.com/WARJY/Chooks/blob/master/docs/router.md) &mdash; 为【vue-router】提供刷新，后退，跳转，获取参数等逻辑
- [`useStore`](https://github.com/WARJY/Chooks/blob/master/docs/store.md) &mdash; 为【vuex】提供state, commit, dispatch等逻辑
- [`useStatic`](https://github.com/WARJY/Chooks/blob/master/docs/static.md) &mdash; 为应用提供一些全局静态hooks

<!-- ## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feat/new-hook`
3. Commit your changes: `git commit -am 'feat(hooks): add a new hook'`
4. Push to the branch: `git push origin feat/new-hook`
5. Submit a pull request :D -->

## License

[MIT](./LICENSE)
