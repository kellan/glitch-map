const React = require('react');
const L = require('leaflet');

class MapLeaflet extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
  }
  
  componentDidMount() {
    const stamenTonerTiles = 'https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
    const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
    
    console.log(this.mapRef.current);
    
    this.map = L.map(this.mapRef.current, {
        center: [40.704617, -74.011233],
        zoom: 16,
        layers: [
          L.tileLayer(stamenTonerTiles,
            {attribution: stamenTonerAttr}
          ),
        ],
    });
  }
  
  render() {
    const style = {
      width: '100%',
      height: '300px',
    };

    return (
      <div ref={this.mapRef} style={style}></div>
    )
  }
}

module.exports = MapLeaflet