import { Avatar, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import React from 'react';
import "./chat.css";

function Chat() {
  return (
    <div className="chat">

    <div className="chat_header">
        <Avatar src="https://i.pinimg.com/736x/81/2d/44/812d44d93fdbe8397bc46e0fd9951547.jpg" />
        
        <div className="chat_header_info">
             <h3>Contact</h3>
             <p>Last seen at...</p>
        </div>
        <div className="chat_header_right">
          <IconButton>
            <SearchIcon />
           </IconButton>
       
           <IconButton>
           <MoreVertIcon />
           </IconButton>

    </div>
    </div>
    
    <div className="chat_body">
        <p className={`chat_message ${true && "chat_receiver"}`}>
        <span className= "contact">Nelsa</span>
        Hey guys
        
        <span className="time_stamp">2:30pm</span>      
        </p>
    </div>
    <div className='chat_footer'>
      <IconButton>
        <InsertEmoticonIcon />
      </IconButton>
        <IconButton> 
           <AttachFileIcon />
          </IconButton>
        <form>
            <input placeholder="Type a message" type="text" />

            <button type="submit">Send a message</button>
        </form>
        <IconButton>
          <MicIcon />
        </IconButton>
        

    </div>

    </div>
  )
}

export default Chat