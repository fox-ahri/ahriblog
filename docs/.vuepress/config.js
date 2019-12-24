const plugins = require('../../config/pluginConf')
const nav = require('../../config/navConf')
const sidebar = require('../../config/sidebarConf/index')

module.exports = {
    title: 'Ahriblog',
    description: 'Ahriblog ahriknow blog vue python java',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }]
    ],
    locales: {
        '/': {
            lang: '简体中文',
            title: '狸知'
        }
    },
    plugins: plugins,
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
