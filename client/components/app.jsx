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
 * }} AppConfig
 */

function App() {
	/** @type {[AppConfig]} */
	const [appConfig, setAppConfig] = useState({})

	/** @type {[Activity[]]} */
	const [activities, setActivities] = useState([])

	useEffect(() => {
		sendRequest('/public-api/activities').then((activities) => {
			setActivities(activities)
		})
	}, [setActivities])

	useEffect(() => {
		sendRequest('/public-api/config').then((config) => {
			setAppConfig(config)
		})
	}, [setAppConfig])

	return (
		<div className="container">
			<div className="row p-3">
				<MyActivities></MyActivities>
			</div>

			<div className="row">
				<Summary
					activities={activities}
					recentDays={appConfig.recentDays}
				></Summary>
			</div>

			<div className="row my-3">
				<Progress
					activities={activities}
					targetDistance={appConfig.targetDistance}
				></Progress>
			</div>

			<div className="clearfix">&nbsp;</div>
		</div>
	)
}

export default App
