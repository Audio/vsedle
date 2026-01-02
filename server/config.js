module.exports = /** @type {const} */ ({
	database: {
		filename: 'database.db',
	},
	recentDays: 7,
	server: {
		port: 3004,
	},
	sports: {
		walking: {
			name: 'Chůze / Běh',
			distance: 1, // 1 real km => 1 virtual km
			unitTooltip: 'skutečné kilometry',
		},
		bicycle: {
			name: 'Kolo / Běžky',
			distance: 0.5, // 1 real km => 0.5 virtual km
			unitTooltip: 'skutečné kilometry',
		},
		fitness: {
			name: 'Fitko / Tenis',
			distance: 5 / 60, // 60 minutes = 5 virtual km, thus 1 minute = 5/60 virtual km
			unitDescription: '60 minut',
			unitDescriptionVirtualKm: 5,
			unitTooltip: 'minuty tréninku',
		},
		swimming: {
			name: 'Plavání',
			distance: 3, // 1 real km => 3 virtual km
			unitTooltip: 'skutečné kilometry',
		},
		sober: {
			name: 'Suchej únor',
			distance: 1, // 1 virtual km or 0 virtual km
			unitDescription: 'splněno',
			unitTooltip: 'skutečné kilometry',
		},
	},
	targetDistance: 500,
	users: {
		dominik: 'Domča',
		gergi: 'Gergi',
		luky: 'Luky',
		martin: 'Martin',
		peta: 'Péťa',
		sasa: 'Saša',
	},
})
