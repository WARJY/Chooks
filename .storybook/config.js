import { configure, addDecorator, addParameters } from '@storybook/vue';
import { addReadme } from 'storybook-readme/vue';
import { themes, create } from '@storybook/theming';
import './story.css'

import Vue from 'vue';
import CompositionApi from '@vue/composition-api'
Vue.use(CompositionApi)

const theme = create({
    base: 'dark',

    colorPrimary: '#35495e',
    colorSecondary: '#42b883',

    brandTitle: 'VueUse',
    brandUrl: 'https://github.com/antfu/vueuse',
    brandImage: 'https://raw.githubusercontent.com/antfu/vueuse/master/resources/logo-storybook.png',
})

addParameters({
    options: {
        showPanel: true,
        panelPosition: 'right',
        theme: theme
    },
    readme: {
        codeTheme: 'github'
    }
})

addDecorator(addReadme);

function loadStories() {
    require.context('../', true, /\.stories\.tsx$/)
}

configure(loadStories, module);