import React from 'react'
import './NoteCard.css'
import moment from 'moment'
import NoteCardTitle from './NoteCardTitle'

export default function NoteCard(props) {
	
	return (
		<div className = 'NoteCard'>
			{/* <div className="shadowBox"></div> */}
			
			<div className="cardBody">
				<div className="titleBar">
					<NoteCardTitle note = {props.note}/>
					<div className="dateBox">
						{moment(props.note.dateCreated.toDate()).format('D[-]MMM[-]YY')}
					</div>
				</div>
				{props.note.body}
			</div>
			
		</div>
	)
	
}
