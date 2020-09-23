import React, { useState, useEffect } from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutLined from '@material-ui/icons/SearchOutlined';
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from '@material-ui/icons/Mic';
import db from './firebase';
import { useParams } from 'react-router-dom';

const Chat = () => {

  const [seed, setSeed] = useState('');
  const [input, setInput] = useState('');
  const { roomId } = useParams();
  const [roomName, setRomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {

      db.collection("rooms").doc(roomId)
        .onSnapshot((snapshot) => setRomName(snapshot.data().name));

      db.collection("rooms").doc(roomId)
        .collection("message").orderBy("timestamp", "asc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) =>
          doc.data()
        ))
        })
    }
    console.log(messages)
  },[roomId])


  useEffect(() => {
    setSeed(Math.floor(Math.random() * 500));
  }, [roomId])
  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>", input);
    setInput('');
  }
  return (
    <div className="Chat">
      <div className="Chat__header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="Chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last seen at ...</p>
        </div>
        <div className="Chat__headerRight">
          <IconButton>
            <SearchOutLined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="Chat__body">
        {messages.map(message => (
          <p className={`Chat__message ${true &&
            "Chat_reciever"}`}>
            <span className="Chat__name">{message.name}</span>
            {message.message}
            <span className="Chat__timestamp">{new Date(message.timestamp.toDate()).toUTCString()}</span> </p>
        ))}
      </div>

      <div className="Chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
          <button onClick={sendMessage} type="submit">Send a message</button>
        </form>
        <MicIcon />
      </div>
    </div>
  )
}

export default Chat
