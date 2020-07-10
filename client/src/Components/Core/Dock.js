import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
import './Dock.css'

export default function Dock(props) {
	
	
	return (
		<div className="dock">
			<button className= 'menuButton' onClick={() => {
				props.setshowList(!props.showList)
			}}><FontAwesomeIcon icon={faBars}/></button>
		</div>
	)
}
