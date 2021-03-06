import { configure, addDecorator, addParameters } from '@storybook/vue'
import { addReadme } from 'storybook-readme/vue'
import { create } from '@storybook/theming'
import logo from './logo2.png'
import './base16-gruvbox.dark.css'
import './story.css'

import Vue from 'vue'
import CompositionApi from '@vue/composition-api'
Vue.use(CompositionApi)

const theme = create({
    base: 'dark',
    colorPrimary: '#35495e',
    colorSecondary: '#42b883',

    showPanel: true,
    panelPosition: 'bottom',

    brandTitle: 'Chooks',
    brandUrl: 'https://github.com/WARJY/Chooks',
    brandImage: logo,
})

addParameters({
    options: {
        theme: theme,
        hierarchySeparator: /\//,
        hierarchyRootSeparator: /\|/,
    },
    readme: {
        codeTheme: 'hopscotch'
    }
})

addDecorator(addReadme)

function loadStories() {
    require.context('../', true, /\.stories\.tsx$/)
}

configure(loadStories, module)