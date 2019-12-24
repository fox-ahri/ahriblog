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
                // 不要忘了安装 moment
                const moment = require('moment')
                moment.locale('zh-CN')
                return moment(timestamp).fromNow()
            }
        }
    ],
    ['@vuepress/plugin-back-to-top'],
    [
        '@vuepress/plugin-google-analytics',
        {
            ga: 'UA-154978622-1'
        }
    ]
]
