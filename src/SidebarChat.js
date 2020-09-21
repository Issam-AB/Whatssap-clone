import React, {useState, useEffect} from 'react';
import './SidebarChat.css';
import { Avatar } from '@material-ui/core';
import db from './firebase';
import { Link } from 'react-router-dom';

const SidebarChat = ({id,name,addNewChat}) => {
   
    const [seed, setSeed] = useState('');

    useEffect(() => {
       setSeed(Math.floor(Math.random() * 5000));
    },[]);

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
              <p>Last message...</p>
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
