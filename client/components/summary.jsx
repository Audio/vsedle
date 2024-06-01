import Km from './km'
import React from 'react'

/**
 * @param {{ activities: import('./app').Activity[], recentDays: number}} props
 */
function Summary({ activities, recentDays }) {
	return (
		<>
			<div className="fs-2 my-3">Přehled</div>
			<table className="table table-striped">
				<thead>
					<tr className="table-dark">
						<th scope="col" className="col-4">
							&nbsp;
						</th>
						<th scope="col" className="col-4">
							Posledních {recentDays} dní
						</th>
						<th scope="col" className="col-4">
							Celkem
						</th>
					</tr>
				</thead>
				<tbody>
					{activities.map((activity) => (
						<tr key={activity.name}>
							<td scope="row">{activity.name}</td>
							<td scope="row">
								<Km distance={activity.recentDistance} />
							</td>
							<td scope="row">
								<Km distance={activity.totalDistance} />
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Summary
