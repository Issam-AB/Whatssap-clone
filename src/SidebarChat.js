import React, {useState, useEffect} from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';

const SidebarChat = ({id,name,addNewChat}) => {
   
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
    },[]);

    useEffect(() => {
      if(id) {
        db.collection("rooms").doc(id)
        .collection("message")
        .orderBy('timestamp','desc')
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map(doc => (
            doc.data()
          )))
        } )
      }
    },[id])

    const createChat = () => {
      const rooName = prompt("Please enter name for chat room ");
         if(rooName) {
           db.collection("rooms").add({
             name: rooName
           });
         }
    }
    return !addNewChat ? (
      <Link to={`/rooms/${id}`}>
         <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar__info">
              <h2>{name}</h2>
              <p>{messages[0]?.message}</p>
            </div>
        </div>
      </Link>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
          <h2>Add new Chat</h2>

        </div>
    )
}

export default SidebarChat
