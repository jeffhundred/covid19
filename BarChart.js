import React from 'react'
import {Bar} from 'react-chartjs-2'

function BarChart(props) {
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
							"rgba(0, 0, 255, 0.5)",
							"rgba(0, 255, 0, 0.5)",
							"rgba(255, 0, 0, 0.5)"
						],
						data:[data.infected, data.recovered, data.deaths]
					}]
				}}
				options={{responsive: true}}
			/>
		</div>
	)
}

export default BarChart