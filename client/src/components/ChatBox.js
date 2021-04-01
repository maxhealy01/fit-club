import React from 'react';
import '../assets/scss/chatbox.scss';


const AppChatBox = () => {

	return (
		<>
    <div className="chat">
      <div className="chat-box">
        <div className="chat-title">
            <h1>USER NAME HERE</h1>
            <h2>USER ID HERE</h2>
            <figure className="avatar">
            <img src="#" /></figure>
        </div>
        <div className="messages">
            <div className="messages-content"></div>
        </div>
        <div className="message-box">
            <textarea type="text" className="message-input" placeholder="Type message..."></textarea>
            <button type="submit" className="message-submit">Send</button>
        </div>
      </div>
    </div>
		</>
	);
};

export default AppChatBox;

