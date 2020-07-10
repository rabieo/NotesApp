import React from 'react'
import NoteCard from '../Display/NoteCard'

export default function NotesList(props) {
	
	const styleList = {
		opacity: props.showList ? '1' : '0'
	}
	
	return (
		<div className="notesList" style={styleList}>
			<h1>{props.activeFolder}</h1>
			
			{props.notes.map((n, i)=>{
				return(
					<NoteCard 
						key = {'notecard'+i}
						note = {n}
						setActiveNote = {props.setActiveNote}
						showList = {props.showList}
					/>
				)
			})}
			
		</div>
	)
}
