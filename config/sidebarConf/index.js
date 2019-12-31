const lvs = require('./lvs/index')
const docker = require('./docker/index')
const redis = require('./redis/index')
const Linux运维 = require('./Linux运维/index')

module.exports = {
    '/Linux运维/': Linux运维,
    '/redis/': redis,
    '/docker/': docker,
    '/lvs/': lvs,
    // fallback
    '/': ['', 'about/']
}
