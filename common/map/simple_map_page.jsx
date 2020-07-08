import React, {Component} from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import GoogleMap from 'google-map-react';
import MyGreatPlace from './my_great_place.jsx';

export default class SimpleMapPage extends Component {

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props)
  }

  render() {
    return (
       <GoogleMap
        apiKey={'AIzaSyBHm4OStSnxqMnw7HYXRxLKE1Mzx2KpFzg'}
        center={[59.938043, 30.337157]}
        zoom={11}>
        <MyGreatPlace lat={59.955413} lng={30.337844} text={this.props.text}/>
      </GoogleMap>
    );
  }
}
