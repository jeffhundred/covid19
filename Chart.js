import React from 'react'
import {Bar, Line} from 'react-chartjs-2'

function Chart(props) {
	const data = {
		infected: props.infected,
		recovered: props.recovered,
		deaths: props.deaths
	}
	return(
		<div>
			<Bar
				data={{
					labels: ["Infected", "Recovered", "Deaths"],
					datasets:[{
						label: "People",
						backgroundColor: [
							"rgba(255, 0, 0, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(0, 0, 255, 0.5)"
						],
						data:[data.infected, data.recovered, data.deaths]
					}]
				}}
			/>
		</div>
	)
}

export default Chart