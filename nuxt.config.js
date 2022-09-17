import { join } from 'path'

const parseCodeAndComments = (file) => {
    // segment
    // { code: '', comment: '' }

    const lines = file.split('\n')
    let lastSeen = ''
    let segments = []
    let body = {
        code: [],
        comments: [],
    }

    lines.forEach((line) => {
        // const matchesComments = line.match(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm)
        const commentPattern = /^(\/\/|#) /gm
        const matchesComments = line.match(commentPattern)
        const matchesCode = !matchesComments

        const newComment = (lastSeen == "") || ((lastSeen != "docs") && (segments[segments.length - 1].comment != ""))
        const newCode = (lastSeen == "") || ((lastSeen != "code") && (segments[segments.length - 1].code != ""))

        if (matchesComments) {
            const trimmed = line.replace(commentPattern, '')

            if (newComment) {
                segments.push({
                    comment: trimmed,
                    code: '',
                })
            } else {
                const index = segments.length - 1
                const current = segments[index]
                segments[index] = {
                    comment: (current.comment == '') ? trimmed : [current.comment, trimmed].join('<br>'),
                    code: current.code,
                }
            }

            lastSeen = 'docs'
        } else if (matchesCode) {
            if (newCode) {
                segments.push({
                    comment: '',
                    code: line,
                })
            } else {
                const index = segments.length - 1
                const current = segments[index]

                segments[index] = {
                    comment: current.comment,
                    code: (current.code == '') ? line : [current.code, line].join('<br>'),
                }
            }

            lastSeen = 'code'
        }
    })

    return { body: segments }
}

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    dev: process.env.NODE_ENV !== 'production',

    publicRuntimeConfig: {
        defaultVersion: "v1.0",
        latestVersion: 'v^1.0.0-beta.0',

        projects: {
            // 'engine': 'https://github.com/zaid-language/engine',
            'zaidlang': 'https://github.com/zaid-language/zaidlang',
        }
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Zaidlang - A small, class-based programming language',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@/assets/css/main.css',
        '@/assets/css/app.css',
        '@/assets/css/prism.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/bootstrap.js' },
        // { src: '@/plugins/fathom.client.js' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/postcss8',
        '@nuxtjs/google-fonts',
    ],

    build: {
        extractCSS: true,
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
    ],

    // Content module configuration: https://go.nuxtjs.dev/config-content
    // content: {
    //     markdown: {
    //         prism: {
    //             theme: false,
    //         }
    //     },

    //     extendParser: {
    //         '.sh': parseCodeAndComments,
    //         '.zaid': parseCodeAndComments,
    //     }
    // },

    googleFonts: {
        families: {
            'Inter': [500, 600, 700, 900],
            'Source Code Pro': [500],
        },
        display: 'swap',
        prefetch: true
    },
}
