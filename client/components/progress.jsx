import Steps from './steps'
import ProgressBar from './progress-bar'
import React from 'react'
import './progress.css'

/**
 * @param {{ activities: import('./app').Activity[], targetDistance: number}} props
 */
function Progress({ activities, targetDistance }) {
	return (
		<>
			<div className="fs-2 my-3">
				Cíl: <Steps count={targetDistance} /> kroků
			</div>
			<div className="container">
				{activities.map((activity) => {
					return (
						<div className="row" key={activity.name}>
							<div className="col-3">{activity.name}</div>
							<div className="col-3">
								<Steps count={activity.totalDistance} />
							</div>
							<div className="col-6">
								<ProgressBar
									distance={activity.totalDistance}
									targetDistance={targetDistance}
								/>
							</div>
						</div>
					)
				})}
			</div>
		</>
	)
}

export default Progress
