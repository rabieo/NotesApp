import React, { useState } from 'react'

export default function NoteCardTitle(props) {
	
	const [editing, setEditing] = useState(false)
	const [pendingAction, setPendingAction] = useState()
	const [titleText, setTitleText] = useState(props.note.title)
	
	function clickHandler(e){
		if(pendingAction){
			pendingAction.run(e)
		} else{
			setPendingAction({run: (e)=>{
				setEditing(true)
				e.target.focus()
			}})
			
			setTimeout(()=>setPendingAction(), 500)
		}
	}
	
	function blurHandler(e){
		setEditing(false)
	}
	
	function changeHandler(e){
		setTitleText(e.target.value)
	}
	
	return (
		<input
			type='text'
			value={titleText}
			onChange = {changeHandler}
			readOnly={!editing}
			onClick = {clickHandler}
			onBlur = {blurHandler}
		/>
	)
}
