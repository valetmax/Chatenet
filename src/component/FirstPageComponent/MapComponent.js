import React, { PureComponent } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

class ReactLeafletMap extends PureComponent {
  state = {
    lat: 44.8762,
    lng: 4.92971,
    zoom: 10,
  }
  
  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div className="map">
        <Map center={ [this.state.lat+0.02, this.state.lng-0.03] } zoom={12} className="map__reactleaflet" animated={true}>
          <TileLayer
            // url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            url="http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png "
            // attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a hrefInteractions="https://carto.com/attribution">CARTO</a>'
            attribution='by Max'
          />
          <Marker
            position={position}
          >
            <Popup>
              Les verges de Chatenet <br /> 
            </Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default ReactLeafletMap;