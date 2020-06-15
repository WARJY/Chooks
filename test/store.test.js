import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import compositionAPI, { defineComponent, SetupContext } from '@vue/composition-api'
import { useRouter, useStore } from '../index'

describe("test useStore", () => {

    test("test useStore", async () => {

        const localVue = createLocalVue()
        localVue.use(VueRouter)
        localVue.use(Vuex)
        localVue.use(compositionAPI)

        const router = new VueRouter({
            routes: [
            {
                path: '/',
                meta: {
                    test: "test"
                }
            },{
                path: '/page2',
                meta: {
                    test: "test2"
                }
            }]
        })

        const store = new Vuex.Store({
            state: {
                test: 1
            },
            mutations: {
                setTest(state, test){
                    state.test = test
                }
            },
            actions: {
                fetchData(store, data){
                    return Promise.resolve(data)
                }
            }
        })

        const App = await defineComponent({
            template: `<div id="app" ref="app"><router-view/></div>`,
            async setup(props, context){
                const { state, commit, dispatch } = useStore(context)
                console.log(state.test)
            }
        })

        const app = await shallowMount(App, {
            localVue,
            router,
            store,
            stubs: ['router-view'],
        })

    })
})