module.exports = {
    '/hacker/': require('./hacker/index'),
    '/nginx/': require('./nginx/index'),
    '/mongo/': require('./mongo/index'),
    '/Linux/': require('./Linux/index'),
    '/redis/': require('./redis/index'),
    '/docker/': require('./docker/index'),
    '/lvs/': require('./lvs/index'),
    '/category/': require('./category/index'),
    '/algorithmanddatastructure/': require('./algorithmanddatastructure/index'),
    // '/python/': require('./python/index'),
    '/datastructurejava/': require('./datastructurejava/index'),
    // fallback
    '/': ['', 'about/']
}
