import React, {useState} from 'react'
import './App.css'
import NotePad from './Components/Core/NotePad'
import Dock from './Components/Core/Dock'
import NotesList from './Components/Core/NotesList'


export default function App(){
	
	const [showList, setShowList] = useState(true)
	const [activeFolder, setActiveFolder] = useState('All Notes')
	
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
			/>
			
			<NotePad showList = {showList}/>
			
		</div>
	)
}