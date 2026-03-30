import Steps from './steps'
import React from 'react'
import iconBicycle from '../assets/bicycle.png'
import iconFitness from '../assets/fitness.png'
import iconGardening from '../assets/gardening.png'
import iconInline from '../assets/inline.png'
import iconRotoped from '../assets/rotoped.png'
import iconRunning from '../assets/running.png'
import iconSwimming from '../assets/swimming.png'
import iconTennis from '../assets/tennis.png'
import iconWalking from '../assets/walking.png'
import './summary.css'

/**
 * @param {keyof import('./app').Sports} sport
 */
const getIcon = (sport) => {
	if (sport === 'bicycle') return iconBicycle
	if (sport === 'fitness') return iconFitness
	if (sport === 'gardening') return iconGardening
	if (sport === 'inline') return iconInline
	if (sport === 'rotoped') return iconRotoped
	if (sport === 'running') return iconRunning
	if (sport === 'swimming') return iconSwimming
	if (sport === 'tennis') return iconTennis
	if (sport === 'walking') return iconWalking
}

/**
 * @param {{ activities: import('./app').Activity[], recentDays: number}} props
 */
function Summary({ activities, recentDays }) {
	return (
		<>
			<div className="fs-2 my-3">Posledních {recentDays} dní</div>
			<table className="table table-striped">
				<thead>
					<tr className="table-dark">
						<th scope="col" className="col-3">
							&nbsp;
						</th>
						<th scope="col" className="col-3">
							Kroky
						</th>
						<th scope="col" className="col-6">
							Aktivity
						</th>
					</tr>
				</thead>
				<tbody>
					{activities.map((activity) => (
						<tr key={activity.name}>
							<td scope="row">{activity.name}</td>
							<td scope="row">
								<Steps count={activity.recentDistance} />
							</td>
							<td scope="row">
								{activity.recentActivities &&
									Object.entries(
										activity.recentActivities,
									).map(([sport, count]) => {
										return (
											<span
												className="sport-icon text-nowrap"
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
