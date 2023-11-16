import React from 'react'
import { allCandidatesData } from '../data/dummydata'

export const useCandidates = (initialNumberOfCandidates) => {
	// initially will pick random
	const [candidates, setCandidates] = React.useState(
		allCandidatesData.slice(0, initialNumberOfCandidates)
	)

	return { candidates, setCandidates }
}
