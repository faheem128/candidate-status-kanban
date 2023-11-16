import React from 'react'
import './style.css'
import plusIcon from '../../assets/plus.svg'

export const AddNewStatusColumn = ({ addStatusData }) => {
	const [showNew, setShowNew] = React.useState(false)
	const [text, setText] = React.useState('')
	return (
		<div
			style={{
				marginLeft: '20px',
				paddingRight: '40px'
			}}
		>
			<div
				onClick={() => {
					setShowNew((s) => !s)
				}}
				className="cs-add-header"
				style={{
					backgroundColor: showNew ? 'rgba(0,0,0,0.05)' : 'rgba(247, 243, 255, 1)',
					borderTopWidth: 0,
					borderRadius: '50px',
					boxShadow: 'none',
					display: 'flex',
					justifyContent: showNew ? 'flex-end' : 'space-between',
					cursor: 'pointer',
					width: showNew ? '30px' : '220px'
				}}
			>
				{!showNew && <span className="csc-header-text">Add Other</span>}
				<img
					src={plusIcon}
					style={{
						transform: `rotate(${showNew ? 45 : 0}deg)`
					}}
					alt="Add/Close Button"
				/>
			</div>
			{showNew && (
				<>
					<input
						value={text}
						onChange={(e) => {
							setText(e.target.value)
						}}
						maxLength={20}
						placeholder="Status title"
						type="text"
						style={{
							marginTop: '10px',
							outlineColor: 'rgba(0,0,0,0.3)',
							boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.2)',
							outlineStyle: 'solid',
							outlineWidth: 1,
							padding: '10px',
							fontSize: '16px',
							borderRadius: '2px',
							backgroundColor: 'white',
							width: '180px'
						}}
					/>
					<br />
					<button
						onClick={() => {
							if (!text?.length) {
								alert('Please enter a title!')
							} else {
								addStatusData(text)
								setText('')
								setShowNew(false)
							}
						}}
						style={{
							marginTop: '10px',
							background: 'linear-gradient(to bottom, #6f3eb2, #482880)',
							borderBottomWidth: '4px',
							borderBottomColor: '#6f3eb2',
							padding: '10px',
							fontSize: '16px',
							borderRadius: '2px',
							boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.2)',
							color: 'white',
							fontFamily: 'Mulish, sans-serif',
							fontWeight: '600',
							width: '180px'
						}}
					>
						Add
					</button>
				</>
			)}
		</div>
	)
}
