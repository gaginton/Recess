import React from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export class Notifications extends React.Component {
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
      <div className="modalContainer inlineBlock">
        <Button color="danger" onClick={this.toggle}>
          Notifications
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="xl"
        >
          <ModalHeader toggle={this.toggle}>Notifications</ModalHeader>
          <ModalBody>
            <div className="section">
              <div className="card z-depth-0">
                <div className="card-content">
                  <ul className="notifications">
                    {this.props.notifications &&
                      this.props.notifications.map(item => {
                        return (
                          <li key={item.id}>
                            <span className="pink-text">{item.user} </span>
                            <span className="grey-text text-darken-3">
                              {item.content}
                            </span>
                            <div className="grey-text small-text note-date">
                              {moment(item.time.toDate()).fromNow()}
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            </div>
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

// const Notifications = props => {
//   const { notifications } = props;
//   return (
//     <div className="section">
//       <div className="card z-depth-0">
//         <div className="card-content">
//           <span className="card-title text-darken-3 bold">Notifications</span>
//           <ul className="notifications">
//             {notifications &&
//               notifications.map(item => {
//                 return (
//                   <li key={item.id}>
//                     <span className="pink-text">{item.user} </span>
//                     <span className="grey-text text-darken-3">
//                       {item.content}
//                     </span>
//                     <div className="grey-text small-text note-date">
//                       {moment(item.time.toDate()).fromNow()}
//                     </div>
//                   </li>
//                 );
//               })}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Notifications;
