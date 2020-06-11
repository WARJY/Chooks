import Vue from 'vue'
import VueRouter from 'vue-router'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import compositionAPI, { defineComponent, SetupContext } from '@vue/composition-api'
import { useRouter } from '../index'

describe("test useRouter", () => {

    test("test useRouter", async () => {
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

        const localVue = createLocalVue()
        localVue.use(VueRouter)
        localVue.use(compositionAPI)
    
        const App = await defineComponent({
            template: `<div id="app" ref="app"><router-view/></div>`,
            async setup(props, context){
                const { router, route, push } = useRouter(context)
                expect(route.meta.test).toBe("test")
                await push("/page2",{
                    id: 1
                })
                expect(route.meta.test).toBe("test2")
            }
        })

        const app = await shallowMount(App, {
            localVue,
            router,
            stubs: ['router-view'],
        })

    })
})