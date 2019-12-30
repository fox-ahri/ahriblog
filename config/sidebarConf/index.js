const lvs = require('./lvs/index')
const docker = require('./docker/index')
const redis = require('./redis/index')

module.exports = {
    '/redis/': redis,
    '/docker/': docker,
    '/lvs/': lvs,
    // fallback
    '/': ['', 'about/']
}
