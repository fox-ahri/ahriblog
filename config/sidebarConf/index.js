const lvs = require('./lvs/index')

module.exports = {
    '/lvs/': lvs,
    // fallback
    '/': ['', 'about/']
}
