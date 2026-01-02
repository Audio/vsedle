import React from 'react'
import Km from './km'

/**
 * @param {{
 *  sports: import('./app').AppConfig['sports']
 * }} props
 */
function DistanceAdjustments({ sports = {} }) {
	return (
		<>
			<div className="fs-2 my-2">Nastavení aktivit</div>
			<p>
				Aktivity se zadávají v kilometrech / minutách dle skutečnosti.
			</p>
			<p>
				V přehledových tabulkách se však zobrazuje virtuální počet
				kilometrů, který zohledňuje náročnost aktivit.
			</p>
			<p>Tabulka přepočtů:</p>
			<table className="table table-striped">
				<thead>
					<tr className="text-light bg-primary">
						<th scope="col">Sport</th>
						<th scope="col">Reálný počet kilometrů / minut</th>
						<th scope="col">
							Virtuální počet kilometrů v tabulkách
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(sports).map(([sportKey, sport]) => {
						const unitDescription = sport.unitDescription ? (
							<>{sport.unitDescription}</>
						) : (
							<Km distance={1} />
						)

						const unitDescriptionVirtualKm =
							sport.unitDescriptionVirtualKm ? (
								<Km distance={sport.unitDescriptionVirtualKm} />
							) : (
								<Km distance={sport.distance} />
							)

						return (
							<tr key={sportKey}>
								<td scope="row">{sport.name}</td>
								<td scope="row">{unitDescription}</td>
								<td scope="row">{unitDescriptionVirtualKm}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</>
	)
}

export default DistanceAdjustments
