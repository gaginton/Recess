import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class RecessInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div className="modalContainer">
        <Button color="danger" onClick={this.toggle}>
          Info
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="xl"
        >
          <ModalHeader toggle={this.toggle}>About Recess</ModalHeader>
          <ModalBody>
            <h4>Recess</h4>
            <p>
              Recess is an app to find, create and organize games. <br />
              Games are split into 6 categories: 1. Classic Recess, 2. Talent,
              3. Sports, 4. Video Games, 5. Party, 6. Tabletop and more.
            </p>
            <h4>Games vs Leagues</h4>
            <p>
              Recess offers two options for creating events: Create Game or
              Create League. <br />
              <b>Games</b> are one-off games, where players may join teams until
              the game's start time. An example is a pickup game of basketball
              at the park, a friendly meet up to play video games or an
              invitation to sing karoake. These games may be co-operative or
              competitive, private or public. Soon users will be able to make a
              game once, and duplicate it for every date they want to play.
              <br />
              <b>Leagues</b> are more rigid, organized sets of games. Leagues
              are set as either "Elimination" or "First to" depending on the
              event organizer's needs. Leagues tend to have more structured
              rules than games. Leagues are identified by their registration
              deadline, which may differ from the first game day. Players can
              not join teams after the registeration deadline. Leagues may occur
              over the course of 1 or more days. [Recess intends to provide
              leagues the option to randomly assign winners and losers, and help
              with player management and time organization of games.]
            </p>
            <h4>Scoring, Wins and Losses</h4>
            <p>
              Recess does not currently keep tracks of game scores, including
              wins or losses. Score tracking will be an optional feature. Games
              and leagues will have unique scoring mechanisms, transparent to
              users. <br />
              <b>"Game Administrators"</b> will be given the option to end a
              game, and then can choose to log scores. After a game admin logs
              the ended game's score, each player can approve or disapprove the
              score. All game players will need to approve a score for it to be
              recorded. If 24 hours pass from the game start, without the game
              admin ending the game, the game will automatically end with no
              scores recorded. <br />
              <b>"League Administrators"</b> will be allowed to end matches and
              rounds, and then provide a score. By registering for a league, you
              are providing the League Administrators the option to mark final
              scores. Leageu Administrators can log and change scores
              indefinitely.
            </p>
            <h4>King of the Chill</h4>
            <p>
              King of the Chill is a project to help create sustainable, local
              communities. Recess is one initiative of this project. It intends
              to help users find nearby games and leagues, and is designed for
              all interests.
            </p>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>
              Cool
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default RecessInfo;
