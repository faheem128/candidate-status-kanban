import React from 'react'
import { Header } from './layout/Header'
import { InfoBanner } from './layout/InfoBanner'
import { CandidatesSorter } from './layout/CandidatesSorter'
import { CandidateDetails } from './layout/CandidateDetails'
import { CandidateContext } from './data/candidateContext'

function App() {
	const [candidateDetails, setCandidateDetails] = React.useState(null)

	return (
		<>
			<Header />
			<InfoBanner />
			<CandidateContext.Provider value={setCandidateDetails}>
				<CandidatesSorter />
			</CandidateContext.Provider>
			{!!candidateDetails && (
				<CandidateDetails candidate={candidateDetails} setCandidateDetails={setCandidateDetails} />
			)}
		</>
	)
}

export default App
