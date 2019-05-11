import React from "react";
import moment from "moment";
import CreateMessage from "./CreateMessage";

// REMEMBER TO REMOVE SCROLLABLE FEED FROM PACKAGES

class Chatroom extends React.Component {
  // componentDidMount() {
  //   this.scrollToBottom();
  // }
  // componentDidUpdate() {
  //   this.scrollToBottom();
  // }
  // scrollToBottom() {
  //   this.el_chat.scrollIntoView({ behavior: "smooth" });
  // }
  render() {
    const { messages } = this.props;
    return (
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title bold">Chat</span>
            <ul className="messages message-list">
              {messages &&
                messages.map(item => {
                  return (
                    <div>
                      <li key={item.id}>
                        <span className="blue-text">
                          {item.authorFirstName} {item.authorLastName}:{" "}
                        </span>
                        <span className="grey-text text-darken-3">
                          {item.message}
                        </span>
                        <div className="grey-text small-text note-date">
                          {moment(item.createdAt.toDate()).fromNow()}
                        </div>
                      </li>
                    </div>
                  );
                })}
              <div
                ref={el_chat => {
                  this.el_chat = el_chat;
                }}
              />
            </ul>
            <CreateMessage />
          </div>
        </div>
      </div>
    );
  }
}

export default Chatroom;
