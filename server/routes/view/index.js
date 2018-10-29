const routes = require('next-routes')()

routes.add({ name: 'index', pattern: '', page: 'DramaList' })
routes.add({ name: 'dramalist', pattern: '/drama', page: 'DramaList' })
routes.add({ name: 'dramadetail', pattern: '/drama/:id/:episode', page: 'DramaDetail' })
routes.add({ name: 'movielist', pattern: '/movie', page: 'MovieList' })
routes.add({ name: 'moviedetail', pattern: '/movie/:id', page: 'MovieDetail' })
routes.add({ name: 'history', pattern: '/history', page: 'History' })
routes.add({ name: 'setting', pattern: '/setting', page: 'Setting' })

module.exports = routes
