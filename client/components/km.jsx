import React from 'react'

/**
 * @param {{distance: number}} props
 */
function Km({ distance }) {
	return <>{distance.toFixed(1)} km</>
}

export default Km
