import React from 'react'
import CountUp from 'react-countup'

function Card(props) {
	return(
		<div className="cardContainer">
			<h3>{props.label}</h3>
			<CountUp start={0} end={props.data} duration={1.5} separator=","/>
			<h3>{new Date(props.date).toDateString()}</h3>
			<h2>{props.description}</h2>
		</div>
	)
}

export default Card