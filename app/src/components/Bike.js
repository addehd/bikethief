import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StandardTime from './StandardTime.js'
import Load from './Loading.js'
import Gmap from './Gmap.js'

//https://www.robinwieruch.de/react-hooks-fetch-data
function Bike({ match }) {
  const [data, setData] = useState({ incident: [] })
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://bikewise.org/api/v1/incidents/${ match.params.id }`
      )
      setData(result.data)
      setLoad(false)
    }
    fetchData()
  }, [])
  return (
    <div>
        {load && <Load/>}
        {
          data.incident.address &&
          <div>
             <section id="bike-info">

               <h1>{ data.incident.title }</h1>
               <p>{ data.incident.description }</p>
                <span>This bike was stolen ca: <StandardTime time={data.incident.occurred_at}/></span>
      
               { data.incident.media.image_url &&
                 <img src={data.incident.media.image_url } alt="{ data.incident.title }"/>
               }
              </section>
              <Gmap address={data.incident.address}/>
          </div>
        }
    </div>
  )
}
export default Bike