import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1IjoibGRqdXNiZXJnIiwiYSI6ImNsN2dzdm56MzA3b3Mzdm1oYTU4dW05M24ifQ.id0Pu9ofg2z-5jZ9lsUAig';


const Map = (props) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {

    if (map.current) return; // initialize map only once

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });

    map.on('style.load', () => {
      map.setFog({}); // Set the default atmosphere style
    });

  }, [])

  return (
    <span className='map-root'>
      <span className='map-container' ref={mapContainer} />
    </span>
  )
}

export default Map