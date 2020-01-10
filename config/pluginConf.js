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
    // ['vuepress-plugin-container'],
    [
        'vuepress-plugin-helper-live2d',
        {
            live2d: {
                enable: true,
                model: 'hibiki', // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
                display: {
                    position: 'right',
                    width: 135,
                    height: 300,
                    hOffset: 65,
                    vOffset: 0
                },
                mobile: {
                    show: false
                },
                react: {
                    opacity: 0.8
                }
            }
        }
    ]
]
