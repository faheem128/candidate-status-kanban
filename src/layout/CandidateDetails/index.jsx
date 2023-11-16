import React from 'react'
import profileBanner from '../../assets/profileBanner.png'
import locationIcon from '../../assets/location.svg'
import cashIcon from '../../assets/cash.svg'
import calendarIcon from '../../assets/calendar.svg'
import callIcon from '../../assets/call.svg'
import emailIcon from '../../assets/email.svg'
import playIcon from '../../assets/play.svg'
import plusIcon from '../../assets/plus.svg'

export const CandidateDetails = ({ candidate, setCandidateDetails }) => {
	return (
		<>
			<div
				onClick={() => {
					setCandidateDetails(null)
				}}
				style={{
					backgroundColor: 'rgba(0,0,0,0.1)',
					position: 'fixed',
					left: 0,
					right: 0,
					bottom: 0,
					top: 0
				}}
			></div>
			<div
				style={{
					position: 'fixed',
					width: '50vw',
					height: '100vh',
					backgroundColor: 'rgba(247, 243, 255, 1)',
					top: 0,
					right: 0,
					bottom: 0,
					borderTopLeftRadius: '15px',
					borderLeftWidth: '1px',
					borderLeftColor: 'rgba(229, 215, 255, 1)',
					overflowY: 'auto'
				}}
			>
				<button
					onClick={() => {
						setCandidateDetails(null)
					}}
					style={{
						position: 'absolute',
						left: '20px',
						top: '20px',
						zIndex: 2,
						cursor: 'pointer'
					}}
				>
					<img
						src={plusIcon}
						style={{
							transform: 'rotate(45deg)',
							width: '20px'
						}}
						alt="Close"
					/>
				</button>
				<img
					src={profileBanner}
					style={{
						position: 'relative'
					}}
					alt="Profile Banner"
				/>

				<img
					src={playIcon}
					style={{
						position: 'relative',
						top: -121,
						left: '24vw'
					}}
					alt="Play"
				/>

				<div
					style={{
						display: 'flex',
						marginRight: '30px',
						marginLeft: '30px'
					}}
				>
					<img
						src={candidate.image}
						style={{
							width: '100px',
							height: '100px',
							borderRadius: '50px',
							position: 'relative',
							top: '-40px'
						}}
						alt="Candidate Profile"
					/>
					<div
						style={{
							marginLeft: '10px',
							marginTop: '2px',
							fontFamily: 'Nuni'
						}}
					>
						<span style={{ fontWeight: '700', fontFamily: 'Mulish, sans-serif', fontSize: '24px' }}>
							{candidate.name}
						</span>
						<br />
						<span
							style={{
								fontFamily: 'Nunito Sans, sans-serif',
								fontSize: '16px'
							}}
						>
							{candidate.designation}
						</span>
					</div>
					<div
						style={{
							marginTop: '10px'
						}}
					>
						<button
							style={{
								backgroundColor: 'rgba(43, 24, 69, 1)',
								height: '32px',
								lineHeight: '28px',
								borderBottomLeftRadius: '16px',
								borderTopRightRadius: '16px',
								paddingRight: '20px',
								paddingLeft: '20px',
								paddingTop: '0px',
								textAlign: 'center',
								color: 'white',
								fontFamily: 'Mulish, sans-serif',
								fontWeight: '700',
								fontSize: 15,
								marginLeft: '50px'
							}}
						>
							Shortlist
						</button>
						<button
							style={{
								backgroundColor: 'transparent',
								height: '32px',
								lineHeight: '28px',
								borderBottomLeftRadius: '16px',
								borderTopRightRadius: '16px',
								paddingRight: '20px',
								paddingLeft: '20px',
								paddingTop: '0px',
								textAlign: 'center',
								color: 'rgba(111, 62, 178, 1)',
								fontFamily: 'Mulish, sans-serif',
								fontWeight: '700',
								fontSize: 15,
								marginLeft: '20px',
								borderColor: 'rgba(111, 62, 178, 1)',
								borderWidth: '1px',
								boxSizing: 'content-box'
							}}
						>
							Message
						</button>
						<button
							style={{
								backgroundColor: 'transparent',
								height: '32px',
								lineHeight: '28px',
								borderBottomLeftRadius: '16px',
								borderTopRightRadius: '16px',
								paddingRight: '20px',
								paddingLeft: '20px',
								paddingTop: '0px',
								textAlign: 'center',
								color: 'rgba(255, 131, 131, 1)',
								fontFamily: 'Mulish, sans-serif',
								fontWeight: '700',
								fontSize: 15,
								marginLeft: '20px',
								borderWidth: '1px',
								boxSizing: 'content-box',
								borderColor: 'rgba(255, 131, 131, 1)'
							}}
						>
							Decline
						</button>
					</div>
				</div>

				<div
					className="ml-8 flex"
					style={{
						fontFamily: 'Nunito Sans, sans-serif',
						fontSize: '16px'
					}}
				>
					<div>
						<div className="flex items-center">
							<img src={locationIcon} alt="Location" />
							<span style={{ marginLeft: '10px' }}>{candidate.location}</span>
						</div>
						<div className="mt-2 flex items-center">
							<img src={callIcon} alt="Phone" />
							<span style={{ marginLeft: '10px' }}>{candidate.phone}</span>
						</div>
						<div className="mt-2 flex items-center">
							<img src={emailIcon} alt="Email" />
							<span style={{ marginLeft: '10px' }}>{candidate.email}</span>
						</div>
					</div>

					<div className="ml-10">
						<div className="flex items-center">
							<img src={locationIcon} alt="Expected Salary" />
							<span style={{ marginLeft: '10px' }}>
								Expected Salary: INR {candidate.expectedSalary}/year
							</span>
						</div>
						<div className="mt-2 flex items-center">
							<img src={cashIcon} alt="Employment Type" />
							<span style={{ marginLeft: '10px' }}>
								Preferred Employment: {candidate.employmentType}
							</span>
						</div>
						<div className="mt-2 flex items-center">
							<img src={calendarIcon} alt="Notice Period" />
							<span style={{ marginLeft: '10px' }}>Notice Period: {candidate.noticePeriod}</span>
						</div>
					</div>
				</div>

				<div
					style={{
						position: 'relative',
						zIndex: 2,
						marginTop: '30px'
					}}
				>
					<span
						style={{
							fontFamily: 'Nunito Sans, sans-serif',
							fontSize: '16px',
							fontWeight: '600',
							marginLeft: '30px',
							borderBottomWidth: '3px',
							borderBottomColor: 'rgba(111, 62, 178, 1)',
							paddingBottom: '5px'
						}}
					>
						DETAIL
					</span>
				</div>
				<div
					style={{
						top: '4px',
						borderBottomWidth: '2px',
						borderBottomColor: 'rgba(229, 215, 255, 1)',
						position: 'relative'
						// zIndex: 0
					}}
				/>

				<div
					style={{
						marginTop: '30px'
					}}
				>
					<span
						style={{
							fontFamily: 'Mulish, sans-serif',
							fontSize: '24px',
							fontWeight: '700',
							marginLeft: '30px'
						}}
					>
						About me
					</span>
				</div>

				<div
					style={{
						marginTop: '25px',
						marginLeft: '30px',
						marginRight: '30px'
					}}
				>
					<span
						style={{
							fontFamily: 'Nunito Sans, sans-serif',
							fontSize: '16px'
						}}
					>
						{candidate.description}
					</span>
				</div>
			</div>
		</>
	)
}
