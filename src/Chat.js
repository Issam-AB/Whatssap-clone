import React, { useState, useEffect } from 'react'
import './Chat.css';
import { Avatar, IconButton } from '@material-ui/core';
import SearchOutLined from '@material-ui/icons/SearchOutlined';
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from '@material-ui/icons/Mic';
import db from './firebase';

const Chat = () => {
    
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRomName] = useState("");

    useEffect(() => {
     if(roomId) {
       db.collection("rooms").doc(roomId)
       .onSnapshot((snapshot) => setRomName(snapshot.data().name));
     }
    },[roomId])

    useEffect(() => {
     setSeed(Math.floor(Math.random() * 500));
    },[])
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
                <h3>Room name</h3>
                <p>Last seen at ...</p>
              </div>
              <div className="Chat__headerRight">
                <IconButton>
                  <SearchOutLined/>
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
               <p className={`Chat__message ${true &&
                "Chat_reciever"}`}>
               <span className="Chat__name">Issam Aboulfadl</span>
                hey guys
                <span className="Chat__timestamp">3:52pm</span> </p>
            </div>

            <div className="Chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat
