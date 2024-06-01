import Km from './km'
import React from 'react'
import './summary.css'

/**
 * @param {{ activities: import('./app').Activity[], recentDays: number}} props
 */
function Summary({ activities, recentDays }) {
	return (
		<table className="table table-striped" id="table">
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
							<Km distance={activity.recentDistance}></Km>
						</td>
						<td scope="row">
							<Km distance={activity.totalDistance}></Km>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Summary
