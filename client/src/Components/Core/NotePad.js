import React from 'react'

export default function NotePad(props) {

	const stylePad = {
		width: props.showList ? '75%' : 'calc(100% - var(--dockWidth)',
	}
	
	return (
		<div style={stylePad} className="notePad">
			
		</div>
	)
}
