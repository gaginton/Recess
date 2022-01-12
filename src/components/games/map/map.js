import React, { Component } from "react";
// import GameList from "../games/GameList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
// import { Redirect } from "react-router-dom";
import { RecessInfo } from "../../modals/RecessInfo";
import GoogleMapReact from "google-map-react";
import MapMarker from "./MapMarker";

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
  }

  render() {
    const mapProps = {
      center: this.state.mapCenterLocation,
      zoom: 16
    };
    const { games } = this.props;
    function filterMarkers(event) {
      if (
        event.markers !== ""
        && event.markers !== null
        && Number.isFinite(event.markers[0].lat)
        && Number.isFinite(event.markers[0].lng)
      ) {
        return true
      }
      return false;
    }
    let gamesWithAddress = games.filter(filterMarkers)
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
              {gamesWithAddress &&
                gamesWithAddress.map(game =>
                  game.markers.map(marker => (
                    <MapMarker
                      lat={marker.lat}
                      lng={marker.lng}
                      title={game.title}
                      gameId={game.id}
                      gameCategory={game.category}
                      dateTime={game.dateTime}
                    />
                  ))
                )}
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
  firestoreConnect([{ collection: "games", orderBy: ["dateTime", "asc"] }])
)(Map);
