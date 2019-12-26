const lvs = require('./lvs/index')
const docker = require('./docker/index')

module.exports = {
    '/docker/': docker,
    '/lvs/': lvs,
    // fallback
    '/': ['', 'about/']
}
