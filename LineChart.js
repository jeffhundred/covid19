import React from 'react'
import {Line} from 'react-chartjs-2'

function LineChart(props){
	return(
		<div>
			<Line 
				data={{
					labels: props.dailyData.map(({reportDate}) => reportDate),
					datasets: [{
						data: props.dailyData.map(({totalConfirmed}) => totalConfirmed),
						label: "Infected",
						borderColor: "blue",
						fill: true,
					},
					{
						data: props.dailyData.map(({deaths}) => deaths.total),
						label: "Deaths",
						borderColor: "red",
						fill: true,
					}]

				}}
				options={{responsive: true}}
			/>
		</div>
	)
}

export default LineChart