import React, { Component } from 'react'
import Message from "./Message"

export default class Messages extends Component {
    
    messages = () => {
        return this.props.messages.map( (message, i) => {
            return (
                <Message
                    key={i}
                    username={message.username}
                    message={message.message}
                    fromMe={message.fromMe}
                />
            )
        })
    }
    
    componentDidUpdate = () => {
        const objDiv = document.getElementById("#messageList")
        objDiv.scrollTop = objDiv.scrollHeight
    }

    render() {
        return (
            <div className="messages" id="messageList">
                { this.messages() }
            </div>
        )
    }
}
