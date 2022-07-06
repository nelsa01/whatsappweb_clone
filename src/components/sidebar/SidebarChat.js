import React from 'react';
import {Avatar } from "@mui/material";
import "./sidebarchat.css";

function SidebarChat({addNewChat }) {

    const createChat = () => {
        const roomName = prompt ("Please enter name for chat");

        if (roomName){
            //do something...
        }
    };

  return !addNewChat ? (
    <div className="sidebarchat">
    <Avatar src="https://i.pinimg.com/736x/81/2d/44/812d44d93fdbe8397bc46e0fd9951547.jpg" />
    <div className='sidebarchat_info'>
        <h2>Contact</h2>
        <p>Hey there! I'm using Whatsapp</p>
    </div>
    </div>
  ) :     (
    <div onClick = {createChat} className="sidebarchat">
    </div>
  )
  }


export default SidebarChat