import React from 'react'
import backIcon from '../../assets/back.svg'
import listIcon from '../../assets/list.svg'
import pauseIcon from '../../assets/pause.svg'

export const InfoBanner = () => {
	return (
		<div
			style={{
				backgroundColor: 'rgba(247, 243, 255, 1)',
				marginTop: '30px',
				height: '130px',
				borderRadius: '18px',
				position: 'relative'
			}}
			className="ml-40 mr-40"
		>
			<div className="flex items-center p-5">
				<img src={backIcon} alt="Go Back" />
				<span
					className="ml-4"
					style={{
						fontFamily: 'Mulish, sans-serif',
						fontSize: '24px',
						fontWeight: '700'
					}}
				>
					Job candidates
				</span>

				<span
					className="ml-6"
					style={{
						fontFamily: 'Nunito Sans, sans-serif',
						fontSize: '16px',
						fontWeight: '600'
					}}
				>
					10 Candidates
				</span>
			</div>
			<div className="absolute bottom-4 right-4 flex">
				<img src={pauseIcon} alt="Split" />
				<img
					src={listIcon}
					style={{
						marginLeft: '5px'
					}}
					alt="Sort"
				/>
			</div>
		</div>
	)
}
