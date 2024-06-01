import React from 'react'

/**
 * @param {number} percent
 */
const getClassName = (percent) => {
	if (percent < 25) return 'bg-danger'
	if (percent < 50) return 'bg-warning'
	if (percent < 75) return 'bg-info'
	return 'bg-success'
}

/**
 * @param {{ distance: number, targetDistance: number }} props
 */
function ProgressBar({ distance, targetDistance }) {
	const percent = Math.floor((distance / targetDistance) * 100)
	const percentInBounds = Math.min(percent, 100)

	return (
		<div className="progress">
			<div
				className={'progress-bar ' + getClassName(percent)}
				style={{ width: percentInBounds + '%' }}
			></div>
		</div>
	)
}

export default ProgressBar
