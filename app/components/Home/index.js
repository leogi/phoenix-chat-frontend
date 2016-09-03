import React from "react"
import cssModules from "react-css-modules"
import style from "./style.css"
import Sidebar from "../Sidebar"


export class Home extends React.Component {
	render(){
		return (
			<div>
				<Sidebar />
				<div className={style.chatWrapper}>
					Home Component
				</div>
			</div>
		)
	}
}

export default cssModules(Home, style)