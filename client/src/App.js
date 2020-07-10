import React, {useState, useEffect} from 'react'
import './App.css'
import NotePad from './Components/Core/NotePad'
import Dock from './Components/Core/Dock'
import NotesList from './Components/Core/NotesList'
import {firestore} from 'firebase'
import Note from './Objects/Note'


export default function App(){
	
	const [showList, setShowList] = useState(true)
	const [activeFolder, setActiveFolder] = useState('All Notes')
	
	//The list of notes (as Note Objects)
	const [notes, setNotes] = useState([])
	
	//The actual actieve Note Object, so you can say activeNoteObject.getTitle() and such...
	const [activeNote, setActiveNote] = useState({})
	
	//Subscribe to the notes
	useEffect(()=>{
		const unsub = firestore().collection('Notes')
		.orderBy('DateModified')
		.onSnapshot(serverUpdate => {
			
			setNotes(serverUpdate.docs.map((d) => {
				return new Note(d.id, d.data())
			}))
		})
		
		return(unsub)
	},[])
	
	const styleBG = {
		backgroundColor: !showList ? 'var(--dockColor)' : 'var(--backgroundColor)',
	}
	
	return (
		<div className="App" style = {styleBG}>
			
			<Dock 
				showList = {showList}
				setshowList = {setShowList}
			>
				{/* The Dock Icons go here. Need a DockIcon component */}
			</Dock>
			
			<NotesList 
				showList = {showList}
				activeFolder = {activeFolder}
				notes = {notes}
				setActiveNote = {setActiveNote}
			/>
			
			<NotePad showList = {showList}/>
			
		</div>
	)
}