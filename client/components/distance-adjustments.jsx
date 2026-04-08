import React from 'react'
import Steps from './steps'

/**
 * @param {{
 *  sports: import('./app').AppConfig['sports']
 * }} props
 */
function DistanceAdjustments({ sports = {} }) {
	const baseMinutes = 30

	return (
		<>
			<div className="fs-2 my-2">Nastavení aktivit</div>
			<p>
				Aktivity se zadávají v minutách dle skutečnosti, chůze v
				krocích.
			</p>
			<p>
				V přehledových tabulkách se však zobrazuje virtuální počet
				kroků, který zohledňuje náročnost aktivit.
			</p>
			<p>Tabulka přepočtů:</p>
			<table className="table table-striped">
				<thead>
					<tr className="text-light bg-primary">
						<th scope="col">Aktivita</th>
						<th scope="col">Reálný počet minut</th>
						<th scope="col">Virtuální počet kroků v tabulkách</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(sports).map(([sportKey, sport]) => {
						const unitDescription = sport.unitDescription ? (
							<>{sport.unitDescription}</>
						) : (
							<>{baseMinutes} minut</>
						)

						const unitDescriptionSteps =
							sport.unitDescriptionSteps ? (
								<Steps count={sport.unitDescriptionSteps} />
							) : (
								<Steps
									count={sport.stepsPerMinute * baseMinutes}
								/>
							)

						return (
							<tr key={sportKey}>
								<td scope="row">{sport.name}</td>
								<td scope="row">{unitDescription}</td>
								<td scope="row">{unitDescriptionSteps}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export default DistanceAdjustments
