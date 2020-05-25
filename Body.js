import React, {Component} from 'react'
import BarChart from "../Components/BarChart.js"
import LineChart from "../Components/LineChart.js"
import Card from "../Components/Card.js"

class Body extends Component {
	constructor(){
		super();
		this.state = {
			infected: 0,
			recovered: 0,
			deaths: 0,
			location: "Global",
			allCountries: [],
			dailyData: [],
			date: ""
		}
		this.handleChange = this.handleChange.bind(this);
		this.getData = this.getData.bind(this);
	}

	componentDidMount(){
		this.getData("https://covid19.mathdro.id/api");

		fetch("https://covid19.mathdro.id/api/countries")
			.then(response => response.json())
			.then(response => {
				const {countries} = response;
				this.setState({
					allCountries: countries
				})
			})
		fetch("https://covid19.mathdro.id/api/daily")
			.then(response => response.json())
			.then(response => {
				this.setState({
					dailyData: response
				})
			})

	}

	handleChange(event) {
		const {value} = event.target;
		this.setState({location: value});
		if(value == "Global") {
			this.getData("https://covid19.mathdro.id/api");
		}
		else {
			this.getData("https://covid19.mathdro.id/api/countries/"+value);
		}
	}

	getData(url){
		fetch(url)
			.then(response => response.json())
			.then(response => {
				const infectedData = response.confirmed.value;
				const recoveredData = response.recovered.value;
				const deathsData = response.deaths.value;
				const todaysDate = response.lastUpdate;
				this.setState({
					infected: infectedData,
					recovered: recoveredData,
					deaths: deathsData,
					date: todaysDate
				})
			})
	}

	render(){
		return(
			<div>
				<section className="dataCollection">
					<Card 
						data={this.state.infected} 
						label="Infected" 
						date={this.state.date}
						description="People infected with COVID-19" 
					/>
					<Card 
						data={this.state.recovered} 
						label="Recovered" 
						date={this.state.date}
						description="Recovered cases of COVID-19" 
					/>
					<Card 
						data={this.state.deaths} 
						label="Deaths" 
						date={this.state.date} 
						description="Deaths caused by COVID-19"
					/>
				</section>
				<select onChange={this.handleChange}>
					<option value="Global">Global</option>
					{this.state.allCountries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
				</select>
				<section className="graphs">
					{this.state.location=="Global" ? 
					<LineChart dailyData={this.state.dailyData}/> :
					<BarChart 
						infected={this.state.infected}
						recovered={this.state.recovered}
						deaths={this.state.deaths} 
					/>
					}
				</section>
			</div>
		)
	}
}

export default Body;