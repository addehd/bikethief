import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import thief from '../img/thief.svg'

function Gmap(props) {
  const [geocode, setData] = useState({})
  const [cordi, setCordi] = useState([])
  const [isFetching, setFetch] = useState(false)

  useEffect(() => {
    const fetchData = async () => {

      const address = props.address.replace(/\s/g, '')

      const result = await axios(
        `https://maps.googleapis.com/maps/api/geocode/json?address=1600${ address }CA&key=AIzaSyA_HvqBaMcd9TsvziQlOMORVNaU_xkLK60`
      )

      setData(result.data)
      setFetch(true)
    }
    fetchData()
  }, [])

  const mapStyles = { width: '100%', height: '70%'}

  return (
    <div id="gmap">
      <h3><img src={thief} alt=""/>Place of theft: { props.address }</h3>
      {isFetching && (
      <Map
      google={props.google}
      zoom={18}
      style={mapStyles}
      initialCenter={{
      lat: geocode.results[0].geometry.location.lat,
      lng: geocode.results[0].geometry.location.lng
      }}
      >
        <Marker
        name={'Stulen cykel'}
        position={{lat: geocode.results[0].geometry.location.lat, lng: geocode.results[0].geometry.location.lng}}
        icon={{
        url: thief,
        anchor: new props.google.maps.Point(32,32),
        scaledSize: new props.google.maps.Size(64,64)}}/>

      </Map>
      )}
    </div>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA_HvqBaMcd9TsvziQlOMORVNaU_xkLK60'
})(Gmap)