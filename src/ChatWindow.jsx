import React from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

function ChatWindow() {
  return (
    <div className="chat-window">
      <MessageList />
      <MessageInput />
    </div>
  );
}

export default ChatWindow;