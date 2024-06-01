const sqlite = require('sqlite')
const sqlite3 = require('sqlite3')

module.exports = class Db {
	/**
	 * @param {{config: typeof import('./config')}} container
	 */
	constructor({ config }) {
		this.config = config
		this.db = null
	}

	async open() {
		this.db = await sqlite.open({
			filename: this.config.database.filename,
			driver: sqlite3.Database,
		})
	}

	async createTables() {
		await this.db.exec(`
			CREATE TABLE activities (
				date DATE NOT NULL,
				user TEXT NOT NULL,
				sport TEXT NOT NULL,
				distance REAL NOT NULL,
				PRIMARY KEY (date, user, sport)
			)
		`)
		await this.db.exec(`
			CREATE TABLE logs (
				timestamp TEXT NOT NULL PRIMARY KEY,
				ip TEXT NOT NULL,
				date DATE NOT NULL,
				user TEXT NOT NULL,
				sport TEXT NOT NULL,
				distance REAL NOT NULL
			)
		`)
	}

	/**
	 * @param {string} [dateFrom]
	 * @returns {Promise<{
	 *  user: keyof import('./config')['users']
	 *  sport: keyof import('./config')['sports']
	 *  distance: number
	 * }[]>}
	 */
	async getActivities(dateFrom) {
		return this.db.all(
			`
				SELECT user, sport, SUM(distance) AS distance
				FROM activities
				${dateFrom ? 'WHERE date >= ?' : ''}
				GROUP BY user, sport
				ORDER BY user, sport ASC
			`,
			dateFrom,
		)
	}

	/**
	 * @param {string} month
	 * @param {string} user
	 * @returns {Promise<{
	 *  user: keyof import('./config')['users']
	 *  sport: keyof import('./config')['sports']
	 *  distance: number
	 * }[]>}
	 */
	async getMyActivities(month, user) {
		return this.db.all(
			`
				SELECT date, user, sport, distance
				FROM activities
				WHERE date LIKE ? || '%'
					AND user = ?
				GROUP BY user, sport
				ORDER BY user, sport ASC
			`,
			month,
			user,
		)
	}

	/**
	 * @param {string} date
	 * @param {string} user
	 * @param {string} sport
	 * @param {number} distance
	 * @param {string} ip
	 */
	async storeActivity(date, user, sport, distance, ip) {
		await this.db.run(
			`
				INSERT INTO activities (date, user, sport, distance)
				VALUES (?, ?, ?, ?)
				ON CONFLICT (date, user, sport)
					DO UPDATE
					SET distance = excluded.distance
			`,
			date,
			user,
			sport,
			distance,
		)

		await this.db.run(
			`
				INSERT INTO logs (timestamp, ip, date, user, sport, distance)
				VALUES (?, ?, ?, ?, ?, ?)
			`,
			new Date().toISOString(),
			ip,
			date,
			user,
			sport,
			distance,
		)
	}
}
