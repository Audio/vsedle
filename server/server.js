const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ViteExpress = require('vite-express')

module.exports = class Server {
	/**
	 * @param {{
	 *   config: typeof import('./config'),
	 *   db: InstanceType<typeof import('./db')>
	 *   activityService: InstanceType<typeof import('./activity-service')>
	 * }} container
	 */
	constructor({ config, db, activityService }) {
		this.app = express()
		this.config = config
		this.db = db
		this.activityService = activityService

		ViteExpress.config({
			viteConfigFile: path.join(__dirname, '../client/vite.config.js'),
		})
	}

	listen() {
		this.app.get('/robots.txt', (req, res) => {
			res.set('Content-Type', 'text/plain')
			res.send('User-agent: *\nDisallow: /')
		})

		this.app.use(bodyParser.json())

		this.app.use('/api/', (req, res, next) => {
			const token = req.body?.token ?? req.query?.token
			if (token !== 'JduNaSnezku') {
				res.status(400)
				res.send({ status: 'Invalid token' })
				return
			}
			next()
		})

		this.app.post('/api/prepare', async (req, res) => {
			await this.db.createTables()
			res.send({ status: 'ok' })
		})

		this.app.post('/public-api/activity', async (req, res, next) => {
			const { user, sport, date, distance } = req.body
			if (!(user in this.config.users)) {
				next(new Error('Invalid user.'))
				return
			}
			if (!(sport in this.config.sports)) {
				next(new Error('Invalid sport.'))
				return
			}
			if (!/^202[34]-\d\d-\d\d$/.test(date)) {
				next(new Error('Invalid date.'))
				return
			}
			if (
				typeof distance !== 'number' ||
				distance < 0 ||
				distance > 1000
			) {
				next(new Error('Invalid distance.'))
				return
			}

			const ip = req.headers['x-forwarded-for'] || ''
			const userAgent = req.headers['user-agent']
			const who = `${userAgent} @ ${ip}`

			await this.db.storeActivity(date, user, sport, distance, who)
			res.send({ status: 'ok' })
		})

		this.app.get('/public-api/activities', async (req, res) => {
			const recentDaysMs = this.config.recentDays * 24 * 3600 * 1000
			const firstRecentDate = new Date(Date.now() - recentDaysMs)
				.toISOString()
				.substring(0, 10)

			const recent = await this.db.getActivities(firstRecentDate)
			const total = await this.db.getActivities()

			res.send(this.activityService.sumActivities(recent, total))
		})

		this.app.get('/public-api/config', async (req, res) => {
			const { recentDays, targetDistance } = this.config
			res.send({ recentDays, targetDistance })
		})

		const { port } = this.config.server

		return new Promise((resolve, reject) => {
			ViteExpress.listen(this.app, port, (err) => {
				if (err) {
					reject(err)
					return
				}

				console.log(`Server is listening on ${port}`)
				resolve(null)
			})
		})
	}
}
