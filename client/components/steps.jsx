import React from 'react'

/**
 * Format large numbers using spaces.
 *
 * @param {{count?: number}} props
 */
function Steps({ count }) {
	if (typeof count === 'undefined') return <></>

	return <>{count.toLocaleString()}</>
}

export default Steps
