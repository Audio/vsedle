const container = require('./server/container')

const db = container.resolve('db')
const server = container.resolve('server')

async function run() {
	await db.open()
	await server.listen()
}

run()
