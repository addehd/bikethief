import React from 'react'

function unixTimeToStandard(unix_timestamp){

	let date = new Date(unix_timestamp * 1000)

	let year = date.getFullYear()
	let month = date.getMonth()
	let day = date.getDay()
	let hours = date.getHours()
	let minutes = "0" + date.getMinutes()
	let seconds = "0" + date.getSeconds()

	let formattedTime = year +'-'+ month +'-'+ day +' '+ hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)

	return formattedTime
}

function StandardTime(props){
	return (
		<span>{unixTimeToStandard(props.time)}</span>
	)
}

export default StandardTime