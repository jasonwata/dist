const middleware = {}

middleware['settings'] = require('../middleware/settings.js')
middleware['settings'] = middleware['settings'].default || middleware['settings']

export default middleware
