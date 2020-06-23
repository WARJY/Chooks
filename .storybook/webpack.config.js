/* eslint-disable @typescript-eslint/no-var-requires */
const prism = require('markdown-it-prism')
const highlightLines = require('markdown-it-highlight-lines')
const linkAttributes = require('markdown-it-link-attributes')

require('prismjs/components/prism-typescript')
require('prismjs/components/prism-javascript')
require('prismjs/components/prism-json')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/components/prism-bash')

module.exports = ({ config }) => {

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [
                        '@babel/env',
                        '@babel/typescript',
                        '@vue/jsx',
                    ],
                },
            },
        ],
    })

    config.resolve.extensions.push('.ts', '.tsx')
    return config
}