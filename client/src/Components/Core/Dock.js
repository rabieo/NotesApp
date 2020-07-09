import React from 'react'

export default function Dock(props) {
	
	
	return (
		<div className="dock">
			<button onClick={() => {
				props.setshowList(!props.showList)
			}}>+</button>
		</div>
	)
}
