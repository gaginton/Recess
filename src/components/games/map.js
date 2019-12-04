import React, { Component } from "react";
// import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { Redirect } from "react-router-dom";
import { RecessInfo } from "../modals/RecessInfo";
import GoogleMapReact from "google-map-react";

const MAPS_API_KEY = "AIzaSyAM6_5p4WOHokKXAJ_U2bVmbBDpUqdm7-U";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        mapCenterLocation: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
    this.updateLocation("Melchett 66, Tel Aviv");
  }
  async updateLocation(address) {
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}+123&key=${MAPS_API_KEY}`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          markers: res.results.map(result => ({
            lat: result.geometry.location.lat,
            lng: result.geometry.location.lng
          }))
        });
      });
    console.log("markers 1", this.state.markers[0]);
  }
  render() {
    const mapProps = {
      center: this.state.mapCenterLocation,
      zoom: 12
    };
    // const { games } = this.props;  WILL USE
    // if (!auth.uid) return <Redirect to="/signin" />; MAY REMOVE SO PEOPLE CAN SEE MAP
    return (
      <React.Fragment>
        {mapProps.center && (
          <div className="mapContainer">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: MAPS_API_KEY
              }}
              defaultCenter={mapProps.center}
              defaultZoom={mapProps.zoom}
              options={{ gestureHandling: "greedy" }}
            >
              {this.state.markers &&
                this.state.markers.map(marker => (
                  <div
                    lat={marker.lat}
                    lng={marker.lng}
                    text="My Marker"
                    className="mapMarker"
                  ></div>
                ))}
            </GoogleMapReact>
          </div>
        )}
        {/* <GameList games={games} */}
        <RecessInfo initialModalState={false} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.ordered.games
    // auth: state.firebase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "games", orderBy: ["dateTime", "asc"] },
    { collection: "notifications", limit: 20, orderBy: ["time", "desc"] }
  ])
)(Map);
