import React from 'react'

export default function NotePad(props) {

	const stylePad = {
		width: props.showList ? 'var(--notePadWidth)' : 'calc(100% - var(--dockWidth)',
	}
	
	return (
		<div style={stylePad} className="notePad">
			
		</div>
	)
}
