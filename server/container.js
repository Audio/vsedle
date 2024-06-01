const awilix = require('awilix')

const container = awilix.createContainer({})
const lifetime = awilix.Lifetime.SCOPED

container.register({
	activityService: awilix.asClass(require('./activity-service'), {
		lifetime,
	}),
	config: awilix.asValue(require('./config'), { lifetime }),
	db: awilix.asClass(require('./db'), { lifetime }),
	server: awilix.asClass(require('./server'), { lifetime }),
})

module.exports = container
