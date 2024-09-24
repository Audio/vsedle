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
		fitness: 'Fitko',
	},
	sportsWalkingRate: {
		walking: 2,
		running: 2,
		bicycle: 1,
		fitness: 5, // not really
	},
	targetDistance: 300,
	users: {
		dominik: 'Domča',
		gergi: 'Gergi',
		martin: 'Martin',
		peta: 'Péťa',
		sasa: 'Saša',
	},
})
