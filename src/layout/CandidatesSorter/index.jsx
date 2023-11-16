import React from 'react'
import './style.css'
import { CandidateStatusColumn } from './CandidateStatusColumn'
import { AddNewStatusColumn } from './AddNewStatusColumn'
import { candidateStatusColumnData } from '../../data/dummydata'

const CandidatesSorterInner = () => {
	const [statusData, setStatusData] = React.useState(candidateStatusColumnData)
	const scrollRef = React.useRef(null)

	const addStatusData = React.useCallback((name) => {
		setStatusData((p) =>
			p.concat({
				id: String(p.length + 1),
				name,
				initialNumberOfCandidates: 0
			})
		)
		if (scrollRef.current) {
			scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
		}
	}, [])

	return (
		<div
			ref={scrollRef}
			className="pl-40 pr-40"
			style={{
				marginTop: '30px',
				overflowX: 'auto',
				minWidth: '95vw'
			}}
		>
			<div style={{ display: 'flex', marginBottom: 100 }}>
				{statusData.map((columnData, index) => (
					<div style={{ marginLeft: index ? '20px' : 0 }}>
						<CandidateStatusColumn key={columnData.id} columnData={columnData} />
					</div>
				))}
				<AddNewStatusColumn addStatusData={addStatusData} />
			</div>
		</div>
	)
}

export const CandidatesSorter = React.memo(CandidatesSorterInner)
