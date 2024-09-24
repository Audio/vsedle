module.exports = class ActivityService {
	/**
	 * @param {{config: typeof import('./config')}} container
	 */
	constructor({ config }) {
		this.config = config
	}

	/**
	 * @typedef {{
	 *  user: keyof import('./config')['users']
	 *  sport: keyof import('./config')['sports']
	 *  distance: number
	 * }} Activity
	 * @param {Activity[]} recentActivities
	 * @param {Activity[]} totalActivities
	 */
	sumActivities(recentActivities, totalActivities) {
		const recentCountsByUserAndActivity = {}
		const recentSumsByUser = {}
		for (const activity of recentActivities) {
			recentSumsByUser[activity.user] ||= 0
			recentSumsByUser[activity.user] += this.#getFairDistance(
				activity.sport,
				activity.distance,
			)

			if (activity.distance > 0) {
				const userActivities = (recentCountsByUserAndActivity[
					activity.user
				] ||= {})
				userActivities[activity.sport] ||= 0
				userActivities[activity.sport] += 1
			}
		}

		const totalSumsByUser = {}
		for (const activity of totalActivities) {
			totalSumsByUser[activity.user] ||= 0
			totalSumsByUser[activity.user] += this.#getFairDistance(
				activity.sport,
				activity.distance,
			)
		}

		return Object.entries(this.config.users).map(([user, name]) => {
			return {
				name,
				recentActivities: recentCountsByUserAndActivity[user],
				recentDistance: recentSumsByUser[user] || 0,
				totalDistance: totalSumsByUser[user] || 0,
			}
		})
	}

	/**
	 * @param {keyof typeof import('./config')['sports']} sport
	 * @param {number} distance
	 */
	#getFairDistance(sport, distance) {
		if (sport === 'walking' || sport === 'running') {
			return distance * 2
		}

		if (sport === 'fitness') {
			// distance is stored in minutes
			// 30 minutes = 5 km, thus 1 minute = 5/30 km
			return distance * (5 / 30)
		}

		return distance
	}
}
