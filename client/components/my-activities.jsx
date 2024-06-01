import React, { useEffect, useState } from 'react'
import MyActivitiesTable from './my-activities-table'
import './my-activities.css'

const months = {
	'2024-06': 'Červen',
	'2024-07': 'Červenec',
	'2024-08': 'Srpen',
}

/**
 * @param {{
 *  onActivityUpdate: () => {}
 *  sports: import('./app').Sports
 *  users: keyof import('./app').Users
 * }} props
 */
function MyActivities({ onActivityUpdate, sports = {}, users = {} }) {
	/** @type {boolean} */
	const [isVisible, setVisible] = useState(false)

	/** @type {[string?]} */
	const [selectedMonth, setSelectedMonth] = useState()

	/** @type {[string?]} */
	const [selectedUser, setSelectedUser] = useState()

	useEffect(() => {
		const currentMonth = new Date().toISOString().substring(0, 7)
		if (currentMonth in months) setSelectedMonth(currentMonth)
		else setSelectedMonth(Object.keys(months)[0])

		if (!selectedUser && Object.keys(users).length > 0) {
			const storedUser = localStorage.getItem('user')
			if (storedUser in users) setSelectedUser(storedUser)
		} else if (selectedUser) {
			localStorage.setItem('user', selectedUser)
		}
	}, [setSelectedMonth, selectedUser, users])

	if (!isVisible) {
		return (
			<div className="text-center">
				<button
					type="button"
					className="btn btn-success"
					onClick={() => setVisible(true)}
				>
					+ Přidat aktivitu
				</button>
			</div>
		)
	}

	return (
		<>
			<div className="text-center">
				<button
					type="button"
					className="btn btn-success"
					onClick={() => setVisible(false)}
				>
					Hotovo
				</button>
			</div>
			<form>
				<div className="form-group">
					<label htmlFor="form-user"> </label>
					Kdo jsem
					<select
						id="form-user"
						className="form-control"
						onChange={(e) => setSelectedUser(e.target.value)}
						value={selectedUser}
					>
						<option></option>
						{Object.entries(users).map(([user, name]) => {
							return (
								<option key={user} value={user}>
									{name}
								</option>
							)
						})}
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="form-month"> </label>
					Měsíc
					<select
						id="form-month"
						className="form-control"
						onChange={(e) => setSelectedMonth(e.target.value)}
						value={selectedMonth}
					>
						{Object.entries(months).map(([id, name]) => {
							return (
								<option key={id} value={id}>
									{name}
								</option>
							)
						})}
					</select>
				</div>
			</form>

			{selectedUser && selectedMonth && (
				<MyActivitiesTable
					month={selectedMonth}
					onActivityUpdate={onActivityUpdate}
					sports={sports}
					user={selectedUser}
				/>
			)}
		</>
	)
}

export default MyActivities
