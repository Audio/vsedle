import React from 'react'
import Steps from './steps'

/**
 * @param {{
 *  sports: import('./app').AppConfig['sports']
 *  sportsStepsRate: import('./app').AppConfig['sportsStepsRate']
 * }} props
 */
function DistanceAdjustments({ sports = {}, sportsStepsRate = {} }) {
	return (
		<>
			<div className="fs-2 my-2">Tabulka přepočtů</div>
			<table className="table table-striped">
				<thead>
					<tr className="text-light bg-primary">
						<th scope="col">Sport</th>
						<th scope="col">Zadaná hodnota</th>
						<th scope="col">Počet kroků v tabulkách</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(sportsStepsRate).map(([sport, rate]) => {
						const base =
							sport === 'sober' ? (
								<input type="checkbox" checked readOnly />
							) : (
								<Steps count={1} />
							)

						return (
							<tr key={sport}>
								<td scope="row">{sports[sport]}</td>
								<td scope="row">{base}</td>
								<td scope="row">
									<Steps count={rate} />
								</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export default DistanceAdjustments
