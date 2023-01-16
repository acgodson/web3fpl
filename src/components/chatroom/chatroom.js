import React from "react";
import Room from 'ipfs-pubsub-room';

export class ChatRoom extends React.Component {
  constructor(props) {
    super();
    this.initRoom(props);
  }
  initRoom = (props) => {
    const { ipfs } = props;
    ipfs.once("ready", () =>
      ipfs.id((err, info) => {
        if (err) {
          throw err;
        }

        console.log("IPFS node ready with address ", info);
        this.room = Room(ipfs, "ipfs-pubsub-demo");
        this.room.on("peer joined", (peer) =>
          this.handlePeerJoin(peer, this.room)
        );
        this.room.on("peer left", (peer) =>
          console.log("peer " + peer + " left")
        );
        //  room.on('peer joined', (peer) => room.sendTo(peer, 'Hello ' + peer + '!'))
        this.room.on("message", (message) => this.handleMessage(message));
        // broadcast message every 2 seconds
        setInterval(() => room.broadcast("hey everyone!"), 2000);
      })
    );
  };
}
