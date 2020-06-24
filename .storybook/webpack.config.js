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