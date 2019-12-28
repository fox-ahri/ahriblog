module.exports = [
    [
        '@vuepress/pwa',
        {
            serviceWorker: true,
            updatePopup: {
                message: '发现文档已更改。',
                buttonText: '刷新'
            }
        }
    ],
    [
        '@vuepress/last-updated',
        {
            transformer: (timestamp, lang) => {
                const moment = require('moment')
                moment.locale('zh-CN')
                return moment(timestamp).fromNow()
            }
        }
    ],
    ['@vuepress/plugin-back-to-top'],
    [
        '@vuepress/medium-zoom',
        {
            options: {
                margin: 16,
                background: '#ddd'
            }
        }
    ],
    ['vuepress-plugin-container']
]
