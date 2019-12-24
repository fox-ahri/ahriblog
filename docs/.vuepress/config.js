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
        ['meta', { name: 'theme-color', content: '#ffffff' }]
    ],
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
