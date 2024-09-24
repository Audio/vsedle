module.exports = /** @type {const} */ ({
	database: {
		filename: 'database.db',
	},
	recentDays: 7,
	server: {
		port: 3004,
	},
	sports: {
		walking: 'Chůze',
		running: 'Běh',
		bicycle: 'Kolo',
		inline: 'Brusle',
		swimming: 'Plavání',
	},
	sportsWalkingRate: {
		walking: 1,
		running: 1,
		bicycle: 0.5,
		inline: 0.5,
		swimming: 2,
	},
	targetDistance: 150,
	users: {
		dominik: 'Domča',
		gergi: 'Gergi',
		martin: 'Martin',
		peta: 'Péťa',
		sasa: 'Saša',
	},
})
