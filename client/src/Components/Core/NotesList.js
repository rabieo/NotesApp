import React from 'react'

export default function NotesList(props) {
	
	const styleList = {
		opacity: props.showList ? '1' : '0'
	}
	
	return (
		<div className="notesList" style={styleList}>
			<h1>{props.activeFolder}</h1>
			{/* Notes components go here */}
		</div>
	)
}
