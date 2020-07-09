import React, {useState} from 'react'
import './App.css'


export default function App(){
	
	const [open, setOpen] = useState(true)
	
	const stylePad ={
		width: open ? '75%' : 'calc(100% - var(--dockWidth)',
	}
	
	const styleBG = {
		backgroundColor: !open ? 'var(--dockColor)' : 'var(--backgroundColor)',
		boxShadow: open ? 'var(--menuShadow)' : 'var(--menuShadow)' 
	}
	
	return (
		<div className="App" style = {styleBG}>
			
			<div className="dock">
				<button onClick={()=>{
					setOpen(!open)
				}}>+</button>
			</div>
			
			<div style={stylePad} className="notePad"></div>
			
		</div>
	)
}