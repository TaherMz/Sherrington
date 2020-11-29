import React from 'react'
import './map.css'
import {compose, withProps} from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    // googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=&callback=initMap",

    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =><div>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 36.394375, lng: 10.209255}} 
  >
    {props.isMarkerShown && <Marker position={{ lat: 36.853246, lng: 10.168558 }} onClick={props.onMarkerClick}/>}
    {props.isMarkerShown && <Marker position={{ lat: 36.899651, lng: 10.124013 }} onClick={props.onMarkerClick}/>}
    {props.isMarkerShown && <Marker position={{ lat: 36.874068, lng: 10.238944  }} onClick={props.onMarkerClick}/>}
    {props.isMarkerShown && <Marker position={{ lat: 35.845484, lng: 10.620514 }} onClick={props.onMarkerClick}/>}
  </GoogleMap>
 
  </div>
)


class Map extends React.Component {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (<div className='map-container'>
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />      
      </div>
    )
  }
}

export default Map