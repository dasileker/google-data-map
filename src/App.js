// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };

//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div id="container">
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyBafIk-hFGrMHHaHkR6_evN0Um8-XRdT-I' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

// export default SimpleMap;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import apiKey from 'env.local';

const mapStyles = {
  width: '90%',
  height: '90%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: 31.794525,
            lng: -7.0849336
          }
        }
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer);
