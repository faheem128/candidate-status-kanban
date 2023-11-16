import React from 'react'
import './style.css'
import building from '../../assets/building.svg'
import marker from '../../assets/marker.svg'
import { CandidateContext } from '../../data/candidateContext'

export const Candidate = ({ candidate, removeCandidate, index, columnId }) => {
	const [isDragging, setIsDragging] = React.useState(false)
	const setCustomerDetails = React.useContext(CandidateContext)
	return (
		<div
			onClick={() => {
				setCustomerDetails(candidate)
			}}
			className="candidate-container"
			draggable
			onDrag={() => {
				setIsDragging(true)
			}}
			onDragStart={(e) => {
				console.log(e)
				e.dataTransfer.effectAllowed = 'copyMove'
				e.dataTransfer.setData('text/plain', JSON.stringify({ ...candidate, columnId }))
			}}
			onDragEnd={(e) => {
				setTimeout(() => {
					e.preventDefault()
					const fb = localStorage.getItem('dragFeedback')
					console.log('DRAG ENDED', fb, columnId)
					if (!!fb) {
						console.log('removed')
						removeCandidate(index)
						localStorage.removeItem('dragFeedback')
					}
					setIsDragging(false)
				}, 100)
			}}
			onDrop={(e) => {}}
			style={{
				visibility: isDragging ? 'hidden' : 'visible'
			}}
		>
			<div className="candidate-bio-container">
				<div
					style={{
						width: '61px',
						height: '61px'
					}}
				>
					<img src={candidate.image} className="candidate-image" alt="Candidate Profile" />
				</div>
				<div className="candidate-bio-text-container">
					<span className="candidate-name">{candidate.name}</span>
					<br />
					<span>{candidate.designation}</span>
				</div>
			</div>
			<div>
				<div className="candidate-additional-meta-container">
					<div>
						<img src={building} alt="Company" />
						<span>{candidate.company}</span>
					</div>
					<div>
						<img src={marker} alt="Location" />
						<span>{candidate.location}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
