import React, { useEffect, useState } from 'react'
import MyActivities from './my-activities'
import Progress from './progress'
import Summary from './summary'
import sendRequest from '../send-request'

/**
 * @typedef {{
 *  name: string
 *  recentDistance: number
 *  totalDistance: number
 * }} Activity
 *
 * @typedef {{
 *  recentDays: number
 *  targetDistance: number
 *  sports: import('../../server/config')['sports']
 *  users: import('../../server/config')['users']
 * }} AppConfig
 */

function App() {
	/** @type {[Activity[]]} */
	const [activities, setActivities] = useState([])

	useEffect(() => {
		sendRequest('/public-api/activities').then((activities) => {
			setActivities(activities)
		})
	}, [setActivities])

	const onActivityUpdate = () => {
		sendRequest('/public-api/activities').then((activities) => {
			setActivities(activities)
		})
	}

	/** @type {[AppConfig]} */
	const [appConfig, setAppConfig] = useState({})

	useEffect(() => {
		sendRequest('/public-api/config').then((config) => {
			setAppConfig(config)
		})
	}, [setAppConfig])

	return (
		<div className="container">
			<div className="row">
				<MyActivities
					onActivityUpdate={onActivityUpdate}
					sports={appConfig.sports}
					users={appConfig.users}
				/>
			</div>

			<div className="row">
				<Summary
					activities={activities}
					recentDays={appConfig.recentDays}
				/>
			</div>

			<div className="row my-3">
				<Progress
					activities={activities}
					targetDistance={appConfig.targetDistance}
				/>
			</div>

			<div className="clearfix">&nbsp;</div>
		</div>
	)
}

export default App
