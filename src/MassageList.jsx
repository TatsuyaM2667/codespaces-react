import React from 'react';

const MessageList = ({ messages }) => {
  return (
    <ul className="message-list">
      {messages.map((message, index) => (
        <li key={index} className="message-item">
          <strong>{message.sender}:</strong> {message.text}
        </li>
      ))}
    </ul>
  );
};

export default MessageList;