import React from 'react'
import './App.css';
import SideBar from './side/sideComponent';
import Contact from './chats/Contact';
import Chat from './chats/chat';
//import notification from './notificationBar/notification';


function App() {
    return(
        <>
        <div className="body-container">

        <SideBar />
        <Contact />
        <Chat />
        <section  className="message-view">
            <div>
               
            </div>
        </section>
        </div>
        </>
    );
}

export default App;