import React from 'react'
import './NotePad.css'

export default function NotePad(props) {
	let padWidth = props.showList ? 'calc(100% - var(--dockWidth) - var(--sideBarWidth)' : 'calc(100% - var(--dockWidth)'
	const stylePad = {
		width: padWidth
	}
	
	return (
		<div style={stylePad} className="notePad">
			
		</div>
	)
}
