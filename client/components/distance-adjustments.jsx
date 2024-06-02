import React from 'react'
import Km from './km'

/**
 * @param {{
 *  sports: import('./app').AppConfig['sports']
 *  sportsWalkingRate: import('./app').AppConfig['sportsWalkingRate']
 * }} props
 */
function DistanceAdjustments({ sports = {}, sportsWalkingRate = {} }) {
	return (
		<>
			<div className="fs-2 my-2">Nastavení aktivit</div>
			<p>Aktivity se zadávají v kilometrech podle skutečnosti.</p>
			<p>
				V přehledových tabulkách se však zobrazuje virtuální počet
				kilometrů, který zohledňuje náročnost aktivit.
			</p>
			<p>Tabulka přepočtů:</p>
			<table className="table table-striped">
				<thead>
					<tr className="text-light bg-primary">
						<th scope="col" className="col-2">
							Sport
						</th>
						<th scope="col" className="col-2">
							Reálný počet kilometrů
						</th>
						<th scope="col">
							Virtuální počet kilometrů v tabulkách
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(sportsWalkingRate).map(([sport, rate]) => {
						return (
							<tr key={sport}>
								<td scope="row">{sports[sport]}</td>
								<td scope="row">
									<Km distance={1} />
								</td>
								<td scope="row">
									<Km distance={rate} />
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
