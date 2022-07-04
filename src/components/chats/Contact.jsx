import React from 'react'
import './contact.css'

export default function Contact({ contact, setContactSelected, messages }){
    const maxTs = Math.max(...messages.map((m) => m.date.getTime()))
    const lastMsg = messages.find((m) => m.date.getTime() === maxTs)

    function truncate(text, length) {
        return text.length > length ? `${text.substring(0, length)} ...` : text
    }
    return(
        <>
        <div className='contacts' onClick={() => setContactSelected(contact)}>
            <div className='avatar'>
                <assets src="./assets/images/logo512.png"></assets>
            </div>
            <div className='contacts-info'>
              <div className="contact-box-header">
                    <h3 className="avatar-title">{contact.name}</h3>
                    <span className="time-mark">{lastMsg.date.toLocaleDateString()}</span>
                </div>
                <div className="last-msg">
                    <img src={doubleCheck} alt="" className="icon-small" />
                    <span className="text">{truncate(lastMsg.msg, 30)}</span>
                </div>
            </div>
        </div>
        </>
    )
}