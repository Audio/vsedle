import Km from './km'
import React from 'react'
import iconBicycle from '../assets/bicycle.png'
import iconInline from '../assets/inline.png'
import iconRunning from '../assets/running.png'
import iconSwimming from '../assets/swimming.png'
import iconWalking from '../assets/walking.png'
import './summary.css'

/**
 * @param {keyof import('./app').Sports} sport
 */
const getIcon = (sport) => {
	if (sport === 'bicycle') return iconBicycle
	if (sport === 'inline') return iconInline
	if (sport === 'running') return iconRunning
	if (sport === 'swimming') return iconSwimming
	if (sport === 'walking') return iconWalking
}

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
												<img src={getIcon(sport)} />
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
