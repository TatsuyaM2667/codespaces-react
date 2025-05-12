import React from 'react';
import ChatWindow from './components/ChatWindow';
import MessageInput from './components/MessageInput';
import MessageList from './components/MessageList';
import './styles/App.css';

function App() {
  return (
    <div className="chat-app">
      <ChatWindow>
        <MessageList />
        <MessageInput />
      </ChatWindow>
    </div>
  );
}

export default App;