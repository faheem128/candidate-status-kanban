import React from 'react'
import './style.css'
import { Candidate } from '../../../components/Candidate'
import { useCandidates } from '../../../hooks/useCandidates'

export const CandidateStatusColumn = ({ columnData }) => {
	const { candidates, setCandidates } = useCandidates(columnData.initialNumberOfCandidates)
	const addCandidate = React.useCallback(
		(candidate) => {
			setCandidates((p) => p.concat(candidate))
		},
		[setCandidates]
	)

	const removeCandidate = React.useCallback(
		(index) => {
			setCandidates((p) => {
				const cloned = [...p]
				cloned.splice(index, 1)
				return cloned
			})
		},
		[setCandidates]
	)
	return (
		<div className="csc-container">
			<div className="csc-header">
				<span className="csc-header-text">{columnData.name}</span>
			</div>
			<br />
			<div
				style={{ height: '80vh', overflowY: 'auto' }}
				onDragOver={(event) => event.preventDefault()}
				onDrop={(e) => {
					console.log('DOPPED')

					e.preventDefault()

					const dragData = e.dataTransfer.getData('text/plain')
					try {
						const candidateSelected = JSON.parse(dragData)
						console.log(candidateSelected, columnData)
						if (candidateSelected?.id && candidateSelected?.columnId !== columnData.id) {
							addCandidate(candidateSelected)
							localStorage.setItem('dragFeedback', candidateSelected?.columnId)
							console.log('ADDED')
						}
					} catch (e) {}
				}}
			>
				{!candidates.length && (
					<div
						style={{
							minHeight: 300
						}}
					></div>
				)}
				{candidates.map((candidate, index) => (
					<div key={index} style={{ marginTop: index ? '10px' : 0 }}>
						<Candidate
							columnId={columnData.id}
							candidate={candidate}
							removeCandidate={removeCandidate}
							index={index}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
