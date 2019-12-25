<template>
    <div id="valine" class="valine">
        <hr style="border-top: 4px dashed #ddd" />
        <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
    name: 'valine',
    data() {
        return {
            window: null
        }
    },
    methods: {
        renderValine() {
            if (typeof window !== 'undefined') {
                this.window = window
                window.AV = require('leancloud-storage')
            }
            const Valine = require('valine')
            const secretKeyConf = require('../../../config/secretKeyConf')
            new Valine({
                el: '#vcomments',
                appId: secretKeyConf.appId,
                appKey: secretKeyConf.appKey,
                notify: false,
                verify: false,
                path: window.location.pathname,
                avatar: '',
                placeholder: '留言'
            })
        }
    },
    mounted() {
        this.renderValine()
    },
    watch: {
        $route: {
            handler: (to, from) => {
                if (to.path !== from.path) {
                    this.$nextTick(() => {
                        this.renderValine()
                    })
                }
            }
        }
    }
}
</script>
