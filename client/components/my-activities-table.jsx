import MyActivityUpdater from './my-activity-updater'
import React, { useEffect, useState } from 'react'
import sendRequest from '../send-request'
import './my-activities-table.css'

/**
 * @typedef {{
 *  date: string
 *  sport: keyof import('../../server/config')['sports']
 *  user: keyof import('../../server/config')['users']
 *  distance: number
 * }} Activity
 *
 * @typedef {keyof import('../../server/config')['sports']} Sport
 * @typedef {{
 *  date: string
 *  day: number
 *  distanceBySport: Record<Sport, number>
 * }} Day
 */

/**
 * Month in JavaScript is 0-indexed (January is 0, February is 1, etc),
 * but by using 0 as the day it will give us the last day of the prior
 * month. So passing in 1 as the month number will return the last day
 * of January, not February.
 * https://stackoverflow.com/a/1184359/557223
 *
 * @param {number} month
 * @param {number} year
 */
const getDaysInMonth = (month, year) => {
	return new Date(year, month, 0).getDate()
}

/**
 * @param {{
 *  month?: string
 *  onActivityUpdate: () => {}
 *  sports: import('../../server/config')['sports']
 *  user?: string
 * }} param0
 */
function MyActivitiesTable({ month, onActivityUpdate, sports, user }) {
	/** @type {[Day[]]} */
	const [days, setDays] = useState([])

	useEffect(() => {
		if (!month || !user) return
		const q = `month=${month}&user=${user}`
		sendRequest(`/public-api/my-activities?${q}`).then(
			/** @param {Activity[]} activities */ (activities) => {
				const yearNum = Number(month.split('-')[0])
				const monthNum = Number(month.split('-')[1])
				const daysInMonth = getDaysInMonth(monthNum, yearNum)

				/** @type {Day[]} */
				const days = []
				for (let day = 1; day <= daysInMonth; ++day) {
					const date = `${month}-${day.toString().padStart(2, '0')}`
					const dateActivities = activities.filter(
						(a) => a.date === date,
					)

					/** @type {Day['distanceBySport']} */
					const distanceBySport = {}

					for (const sport of Object.keys(sports)) {
						distanceBySport[sport] = dateActivities
							.filter((a) => a.sport === sport)
							.map((a) => a.distance)
							.reduce((a, b) => a + b, 0)
					}

					days.push({
						date,
						day,
						distanceBySport,
					})
				}
				setDays(days)
			},
		)
	}, [setDays, month, sports, user])

	return (
		<table className="table table-striped" id="my-activities-table">
			<thead>
				<tr className="text-light bg-primary">
					<th scope="col" className="col-2">
						Den
					</th>
					{Object.values(sports).map((name) => {
						return (
							<th scope="col" className="col-2" key={name}>
								{name}
							</th>
						)
					})}
				</tr>
			</thead>
			<tbody>
				{days.map((day) => (
					<tr key={day.date}>
						<td scope="row">{day.day}.</td>
						{Object.keys(sports).map((sport) => {
							return (
								<td scope="row" key={day.date + sport}>
									<MyActivityUpdater
										date={day.date}
										initialValue={
											day.distanceBySport[sport]
										}
										onActivityUpdate={onActivityUpdate}
										sport={sport}
										user={user}
									/>
								</td>
							)
						})}
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default MyActivitiesTable
