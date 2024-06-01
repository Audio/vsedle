import React from 'react'

function MyActivities() {
	// TODO
	// let monthIndex

	// $('previous-month').onclick = () => {
	// 	monthIndex = Math.max(monthIndex - 1, 0)
	// 	renderMonth()
	// 	renderMonthTotal()
	// }

	// $('next-month').onclick = () => {
	// 	monthIndex = Math.min(monthIndex + 1, months.length)
	// 	renderMonth()
	// 	renderMonthTotal()
	// }

	// class Table {
	// 	constructor(selector) {
	// 		this.tableBody = $(selector)
	// 		this.tableBody.innerHTML = ''
	// 		this.onDistanceChangeFn = () => {}
	// 	}

	// 	addRow(day, date, distancePeta, distanceMartin) {
	// 		const tr = document.createElement('tr')
	// 		tr.appendChild(this.createDateCol(day))
	// 		tr.appendChild(
	// 			this.createUserCol('peta', date, distancePeta),
	// 		)
	// 		tr.appendChild(
	// 			this.createUserCol('martin', date, distanceMartin),
	// 		)
	// 		this.tableBody.appendChild(tr)
	// 	}

	// 	createDateCol(day) {
	// 		const td = document.createElement('td')
	// 		td.scope = 'row'
	// 		td.innerText = day
	// 		return td
	// 	}

	// 	createUserCol(name, date, distance) {
	// 		const td = document.createElement('td')
	// 		const input = document.createElement('input')
	// 		input.type = 'number'
	// 		input.value = distance
	// 		input.dataset.storedValue = distance
	// 		const buttons = document.createElement('div')
	// 		buttons.classList.add('m-2', 'd-none')
	// 		const buttonOk = document.createElement('button')
	// 		buttonOk.textContent = 'Uložit'
	// 		buttonOk.classList.add('btn', 'btn-success', 'm-1')
	// 		buttonOk.onclick = () => {
	// 			const distance = input.valueAsNumber
	// 			sendRequest('/public-api/store', 'POST', {
	// 				date,
	// 				name,
	// 				distance,
	// 			}).then(() => {
	// 				this.onDistanceChangeFn(date, name, distance)
	// 				renderMonthTotal()
	// 				renderTotal()
	// 				input.dataset.storedValue = distance
	// 				buttons.classList.remove('d-block')
	// 				buttons.classList.add('d-none')
	// 			})
	// 		}
	// 		const buttonCancel = document.createElement('button')
	// 		buttonCancel.textContent = 'Zahodit'
	// 		buttonCancel.classList.add('btn', 'btn-danger', 'm-1')
	// 		buttonCancel.onclick = () => {
	// 			input.value = input.dataset.storedValue
	// 			buttons.classList.remove('d-block')
	// 			buttons.classList.add('d-none')
	// 		}
	// 		buttons.appendChild(buttonOk)
	// 		buttons.appendChild(buttonCancel)
	// 		td.appendChild(input)
	// 		td.appendChild(buttons)
	// 		input.onfocus = () => {
	// 			buttons.classList.remove('d-none')
	// 			buttons.classList.add('d-block')
	// 		}
	// 		input.onblur = () => {
	// 			const isDirty =
	// 				input.dataset.storedValue !== input.value

	// 			if (isDirty) return

	// 			buttons.classList.remove('d-block')
	// 			buttons.classList.add('d-none')
	// 		}
	// 		return td
	// 	}

	// 	onDistanceChange(fn) {
	// 		this.onDistanceChangeFn = fn
	// 	}
	// }

	// const renderTotal = () => {
	// 	const totalPeta = months
	// 		.flatMap((m) =>
	// 			m.distances.map(
	// 				({ distance_peta }) => distance_peta,
	// 			),
	// 		)
	// 		.reduce((sum, dst) => sum + dst, 0)

	// 	const totalMartin = months
	// 		.flatMap((m) =>
	// 			m.distances.map(
	// 				({ distance_martin }) => distance_martin,
	// 			),
	// 		)
	// 		.reduce((sum, dst) => sum + dst, 0)

	// 	const totalDist = 1100

	// 	const percPeta = Math.min(
	// 		Math.floor((totalPeta / totalDist) * 100),
	// 		100,
	// 	)
	// 	const percMartin = Math.min(
	// 		Math.floor((totalMartin / totalDist) * 100),
	// 		100,
	// 	)

	// 	$('total-peta').innerText = totalPeta
	// 	$('total-martin').innerText = totalMartin

	// 	$('progress-peta').style.width = percPeta + '%'
	// 	$('progress-martin').style.width = percMartin + '%'
	// }

	// const currentMonth = new Date().getMonth() + 1
	// const monthsToAutoSelect = [12, 1, 2, 3, 4, 5]
	// const i = monthsToAutoSelect.indexOf(currentMonth)
	// monthIndex = i > -1 ? i : 0

	// renderMonth()
	// renderMonthTotal()
	// renderTotal()

	// function $(id) {
	// 	return document.getElementById(id)
	// }

	return (
		<>
			<div className="col-2 d-flex align-items-center justify-content-center">
				<button
					type="button"
					className="btn btn-outline-secondary"
					id="previous-month"
				>
					&lt;
				</button>
			</div>
			<div className="col-8 d-flex align-items-center justify-content-center">
				<span className="fs-2" id="month"></span>
			</div>
			<div className="col-2 d-flex align-items-center justify-content-center">
				<button
					type="button"
					className="btn btn-outline-secondary"
					id="next-month"
				>
					&gt;
				</button>
			</div>
		</>
	)
}

export default MyActivities
