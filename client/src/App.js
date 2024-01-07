
import { Chat } from 'stream-chat-react';
import './App.css';
import { StreamChat } from 'stream-chat';
import { ChannelListContainer,ChannelContainer } from './components';

const apiKey = "x6z5r5v675yw";

const client = StreamChat.getInstance(apiKey);

function App() {
  return (
    <div className="app__wrapper">
      <Chat client={client} theme='team-light'>
        <ChannelListContainer/>
        <ChannelContainer/>
      </Chat>
    </div>
  );
}

export default App;
