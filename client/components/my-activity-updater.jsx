import React, { useEffect, useState } from 'react'
import sendRequest from '../send-request'

/**
 * @param {string} user
 * @param {string} sport
 * @param {string} date
 * @param {number} distance
 */
const store = (user, sport, date, distance) => {
	return sendRequest('/public-api/activity', 'POST', {
		user,
		sport,
		date,
		distance,
	})
}

const NO_VALUE = ''

/**
 * @param {{
 *  date: string
 *  initialValue: number
 *  onActivityUpdate: () => {}
 *  sport: keyof import('./app').Sports
 *  sportTooltip: string
 *  user: keyof import('./app').Users
 * }} props
 */
function MyActivityUpdater({
	date,
	initialValue,
	onActivityUpdate,
	sport,
	sportTooltip,
	user,
}) {
	const [storedValue, setStoredValue] = useState(initialValue)
	const [value, setValue] = useState(storedValue)

	useEffect(() => {
		setValue(initialValue)
		setStoredValue(initialValue)
	}, [setValue, setStoredValue, initialValue])

	const showButtons =
		value !== storedValue && !Number.isNaN(value) && value !== NO_VALUE

	const input =
		sport === 'sober' ? (
			<input
				type="checkbox"
				checked={value === 1}
				onChange={(e) => {
					setValue(e.target.checked === true ? 1 : 0)
				}}
			/>
		) : (
			<input
				type="number"
				value={value}
				min={0}
				onChange={(e) => {
					const value = parseFloat(e.target.value.replace(',', '.'))
					setValue(Number.isNaN(value) ? NO_VALUE : value)
				}}
				onBlur={() => {
					if (value === NO_VALUE) setValue(storedValue)
				}}
			/>
		)

	return (
		<>
			{input}
			<div className={'mt-2 ' + (showButtons ? 'd-block' : 'd-none')}>
				{sportTooltip}
			</div>
			<div className={'mt-2 ' + (showButtons ? 'd-block' : 'd-none')}>
				<button
					className="btn btn-success mt-1"
					onClick={() => {
						store(user, sport, date, value)
							.then(() => setStoredValue(value))
							.then(() => onActivityUpdate())
					}}
				>
					Uložit
				</button>
				<button
					className="btn btn-danger mt-1 ms-1"
					onClick={() => setValue(storedValue)}
				>
					Zahodit
				</button>
			</div>
		</>
	)
}

export default MyActivityUpdater
