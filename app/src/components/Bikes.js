import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/App.css'
import Loading from './Loading'
import StandardTime from './StandardTime.js'
import placeholder_img from '../img/placeholder.svg'
import { Link } from "react-router-dom"

function Bikes() {
  const [incidents, setIncidentData] = useState({ incidents: [] })
  const [search, setSeach] = useState(null)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://bikewise.org:443/api/v2/incidents?page=1&proximity=55.607405%2C12.998945&proximity_square=100`)

      setIncidentData(result.data)
      setLoad(false)
    }
    fetchData()
  }, [])

  let searchSpace = (event)=> {
    let keyword = event.target.value
    setSeach({search:keyword})
  }

  const items = incidents.incidents.filter((data)=>{
    console.log(data.title)
    console.log(search)
    if(search == null){
        return data }
    else if( data.title.toLowerCase().includes(search.search.toLowerCase()) || data.address.toLowerCase().includes(search.search.toLowerCase()) ){
        return data
    }
  }).map(data=>{
    return(
      <div className="listed" key={data.id}>
        { data.media.image_url_thumb && <img src={ data.media.image_url_thumb }/>
        || <img src={ placeholder_img }/> }

        <span>{data.title}</span>
        <span>{data.address}</span>

        <Link to={`/bike/${data.id}`}>{data.title}</Link>

        <StandardTime time={data.occurred_at}/>
      </div>
    )
  })

  return (
    <div id="bikes">
      <label>
         <input type="text" placeholder="Search for stolen bike's" onChange={(e)=>searchSpace(e)} />
      </label>

      <section>{items}</section>
      { load && <Loading/> }
    </div>
  )
}

export default Bikes