<template>
    <div id="valine" class="valine">
        <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            window: null
        }
    },
    name: 'valine',
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
                avatar: '',
                placeholder: '留言'
            })
        }
    },
    mounted() {
        this.renderValine()
    }
}
</script>

<style scoped>
#valine {
    padding: 0;
    margin: 0;
}
</style>
