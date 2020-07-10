import React from 'react'
import './NoteCard.css'

export default function NoteCard(props) {
	
	return (
		<div className = 'NoteCard'>
			{/* <div className="shadowBox"></div> */}
			
			<div className="cardBody">
				<h2>{props.note.title}</h2>
				{props.note.body}
			</div>
			
		</div>
	)
	
}
