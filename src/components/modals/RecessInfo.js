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
      <div className="modalContainer inlineBlock bottomLeft">
        <Button color="danger" onClick={this.toggle}>
          I
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="xl"
        >
          <ModalHeader toggle={this.toggle}>About Recess</ModalHeader>
          <ModalBody>
            <h4>Recess is...</h4>
            <p>
              an app to find, create and organize games. Recess' goal is to help
              good people find nearby games and leagues, and ultimately find the
              most suitable matches. Written by: Guy Ginton, Ori Gold, Eldad
              Bercovici and Oren Spiegel.
              <br />
            </p>
            <h4>Games vs Leagues</h4>
            <p>
              Recess will offer two options for creating events: Create Game or
              Create League.
            </p>
            <p>
              <b>Games</b> are one-off games. Players may join teams until the
              game's start time. These games may be co-operative or competitive,
              private or public. Users may duplicate and modify games.
            </p>
            <p>
              <b>Leagues</b> are more rigid, organized sets of games. Leagues
              have rounds, over the course of one or more days. Organizers set a
              "First to" paramter -- a value of 1 is equivalent to elimination
              rules, and a value of 2 means 'the first team to log 2 wins
              advances to next round.' Leagues are identified by their
              registration deadline, which may differ from the first game day.
              Game rules can not be modified after the registeration deadline.
              Recess will build tools to help with league organization, and
              assigning matches.
            </p>
            <p>
              Games are split into 6 categories: 1. Classic Recess, 2. Talent,
              3. Sports, 4. Video Games, 5. Party, 6. Tabletop and more.
            </p>
            <h4>Scoring, Wins and Losses</h4>
            <p>
              Recess does not currently keep tracks of game scores, including
              wins or losses. Score tracking will be an optional feature. Games
              and leagues will have unique scoring mechanisms, transparent to
              users. The intention is for scoring to help create appropriate
              matches.
              <p>
                <b>"Game Administrators"</b> are given the option to end a game
                within 24 hours of its start time. After a game is ended, either
                by the admin or 24 hours elapsing, the Game Admin can enter the
                final score. Each player then has 24 hours to approve or
                disapprove the score. All players must approve a score for it to
                be recorded.
              </p>
              <p>
                <b>"League Administrators"</b> will be allowed to end matches
                and rounds, and then provide a score. By registering for a
                league, you are granting the League Administrators rights to
                mark final scores. League Administrators can log and change
                scores at any time.
              </p>
            </p>
            <h4>King of the Chill</h4>
            <p>
              King of the Chill is a project to help create sustainable, local
              communities. Recess is one initiative of this project.
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
