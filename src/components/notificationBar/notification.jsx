import React from 'react'
import './notification.css'

function notification(){
    return (
        <>
        <div className="noti">
            <div className="bar">
                <header>
                <script src="https://kit.fontawesome.com/a58526c50e.js" crossorigin="anonymous"></script>
                <i class="fa-solid fa-bell-slash"></i>
                </header>
            </div>
            <div className="notifi">
                <h1>Get notified of new messages</h1>
                <p>Turn on desktop notfications</p>
            </div>
        </div>
        </>
    );
}

export default notification;