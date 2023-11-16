import React from 'react'
import './header.css'
import logo from '../../assets/auva-logo.svg'
import headerBanner from '../../assets/header-banner.svg'

const HeaderInner = () => {
	return (
		<div className="custom-header-shadow md:pl-30 sticky flex w-full items-center justify-between space-x-10 bg-white pb-4 pl-10 pr-40 pt-4 sm:pl-40 lg:pl-40">
			<img className="w-25 h-18" src={logo} alt="AVUA Logo"></img>
			<img className="h-10 w-52" src={headerBanner} alt="AVUA Logo"></img>
		</div>
	)
}

export const Header = React.memo(HeaderInner)
