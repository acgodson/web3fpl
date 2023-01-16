import { ChatRoom } from './components/chatroom/chatroom';
import React from 'react';
import './App.css';
const IPFS = require('ipfs')
function App() {
  const ipfs = new IPFS({
     repo: repo(),
     EXPERIMENTAL: {
      pubsub: true
     },
     config: {
       Addresses: {
          Swarm: [
                 '/dns4/ws-star.discovery.libp2p.io/tcp/443/wss/p2p-  websocket-star'
            ]
     }
    }
})
function repo() {
 return 'ipfs/pubsub-demo/' + Math.random()
}
return (
 <div className="App">
   <header className="App-header">
     <ChatRoom ipfs={ipfs}></ChatRoom>
   </header>
 </div>
 );
}
export default App;