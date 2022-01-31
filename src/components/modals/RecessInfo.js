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
                    <ModalHeader toggle={this.toggle}>Recess Info</ModalHeader>
                    <ModalBody>
                        <h2>Recess is...</h2>
                        <p>an app to get offline, when you can.
                            <br />
                            Recess is a way to find, create and organize Games, Events and Skills.
                            <br />
                        </p>
                        <h2>Games vs Leagues</h2>
                        <p>Games are one-off. Leagues connect games, for when one isn't enough.</p>
                        <p>
                            <b>Games</b> are one-off. Players may join teams or "standby" until the
                            game's start time. These games will be co-operative or competitive,
                            public or within a club.
                        </p>
                        <p>
                            <b>Leagues</b> are organized sets of games.
                            Leagues have rounds, and may take multiple days.
                            Leagues have unchangable registeration deadlines and rules.
                            Organizers set a "First to" parameter.
                            "First to 1" is equivalent to elimination rules.
                            "First to 2" means 'first team to log 2 wins advances.'
                        </p>
                        <p>
                            Games are split into 6 categories: 1. Classic Recess, 2. Talent,
                            3. Sports, 4. Video Games, 5. Party, 6. "Tabletop and More".
                        </p>
                        <h2>Scoring, Wins and Losses</h2>
                        <p>
                            Recess will keep track of wins or losses... if you want.
                            The intention of scoring is to improve matches based on quality of players.
                            <p>
                                <b>"Game Administrators"</b> end a game and log scores.<br />
                                <b>"Game Players"</b> play games and can disapprove of scores.
                            </p>
                            <p>
                                <b>"League Administrators"</b> can end, score and modify connected games.<br />
                                <b>"League Players"</b> have agreed to the league rules.
                                Ie League Players can not disapprove of final scores.
                            </p>
                        </p>
                        <h1>King of the Chill</h1>
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
