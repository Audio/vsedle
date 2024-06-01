import Km from './km'
import React from 'react'
import './summary.css'

/**
 * @param {{ activities: import('./app').Activity[], recentDays: number}} props
 */
function Summary({ activities, recentDays }) {
	return (
		<>
			<div className="fs-2 my-3">Nedávné aktivity</div>
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
							Aktivity
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
								{activity.recentActivities &&
									Object.entries(
										activity.recentActivities,
									).map(([sport, count]) => {
										return (
											<span
												className="sport-icon"
												key={activity.name + sport}
											>
												<span className="badge rounded-pill bg-secondary">
													{count}x
												</span>
												&nbsp;
												<img
													src={
														'assets/' +
														sport +
														'.png'
													}
												/>
											</span>
										)
									})}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	)
}

export default Summary
