import Km from './km'
import ProgressBar from './progress-bar'
import React from 'react'
import './progress.css'

/**
 * @param {{ activities: import('./app').Activity[], targetDistance: number}} props
 */
function Progress({ activities, targetDistance }) {
	return (
		<>
			<div className="fs-2 my-3">Celkem ze {targetDistance} km</div>
			<div className="container">
				{activities.map((activity) => {
					return (
						<div className="row" key={activity.name}>
							<div className="col-4">{activity.name}</div>
							<div className="col-2">
								<Km distance={activity.totalDistance}></Km>
							</div>
							<div className="col-6">
								<ProgressBar
									distance={activity.totalDistance}
									targetDistance={targetDistance}
								></ProgressBar>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Progress
