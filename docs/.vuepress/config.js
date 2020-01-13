const plugins = require('../../config/pluginConf')
const nav = require('../../config/navConf')
const sidebar = require('../../config/sidebarConf/index')

module.exports = {
    title: '狸知',
    description: 'Ahriblog ahriknow blog vue python java',
    head: [
        ['link', { rel: 'apple-touch-icon', href: '/favicon.ico' }],
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#ffffff' }],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
            }
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href:
                    'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css'
            }
        ]
    ],
    plugins: plugins,
    markdown: {
        lineNumbers: true,
        anchor: { permalink: false },
        toc: { includeLevel: [1, 2, 3] },
        extendMarkdown: md => {
            md.use(require('markdown-it-emoji'))
            md.use(require('markdown-it-katex'))
        }
    },
    themeConfig: {
        smoothScroll: true,
        repo: 'fox-ahri/ahriblog',
        editLinks: true,
        editLinkText: '编辑文档',
        docsDir: 'docs',
        lastUpdated: '最近更新',
        nav: nav,
        sidebar: sidebar
    }
}
