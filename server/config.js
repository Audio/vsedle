const baseMinutes = 30
const defaultUnitDescription = `${baseMinutes} minut`
const defaultUnitTooltip = 'minuty aktivity'
const targetVirtualSteps = 300_000

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
			name: 'Chůze',
			stepsPerMinute: 0,
			unitDescription: 'jeden den',
			unitDescriptionSteps: 'skutečné kroky',
			unitTooltip: 'skutečné kroky',
		},
		running: {
			name: 'Běh',
			stepsPerMinute: 4710 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		tennis: {
			name: 'Tenis',
			stepsPerMinute: 4110 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		fitness: {
			name: 'Fitko',
			stepsPerMinute: 3540 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		bicycle: {
			name: 'Kolo',
			stepsPerMinute: 4710 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		swimming: {
			name: 'Plavání',
			stepsPerMinute: 5880 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		inline: {
			name: 'Brusle',
			stepsPerMinute: 4110 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		rotoped: {
			name: 'Rotoped',
			stepsPerMinute: 4110 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
		gardening: {
			name: 'Zahradničení',
			stepsPerMinute: 3630 / baseMinutes,
			unitDescription: defaultUnitDescription,
			unitTooltip: defaultUnitTooltip,
		},
	},
	targetDistance: targetVirtualSteps,
	users: {
		dominik: 'Domča',
		gergi: 'Gergi',
		luky: 'Luky',
		martin: 'Martin',
		peta: 'Péťa',
		sasa: 'Saša',
	},
})
