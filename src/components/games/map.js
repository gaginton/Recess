import React, { Component } from "react";
// import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import { RecessInfo } from "../modals/RecessInfo";
import Notifications from "../dashboard/Notifications";
import GoogleMapReact from "google-map-react";

const MAPS_API_KEY = "AIzaSyAM6_5p4WOHokKXAJ_U2bVmbBDpUqdm7-U";

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log("here!!!", position);
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
    this.updateLocation("רוטשילד 123");
  }

  updateLocation(location) {
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=%D7%A8%D7%95%D7%98%D7%A9%D7%99%D7%9C%D7%93+123&key=${MAPS_API_KEY}`
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
  }
  render() {
    const mapProps = {
      center: this.state.location,
      zoom: 11
    };

    const { games, auth, notifications, viewStyle } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
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

        <div className="dashboard container">
          <div className="row">
            {/* <h1 className="white">GOOGLE MAP WILL TAKE UP ENTIRE SCREEN</h1> */}
            {/* <GameList games={games} */}
          </div>
          <Notifications
            notifications={notifications}
            initialModalState={false}
          />
          <RecessInfo initialModalState={false} />
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.ordered.games,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    messages: state.firestore.ordered.chatroom,
    viewStyle: state.viewStyle
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: "games", orderBy: ["dateTime", "asc"] },
    { collection: "notifications", limit: 20, orderBy: ["time", "desc"] }
  ])
)(Map);
