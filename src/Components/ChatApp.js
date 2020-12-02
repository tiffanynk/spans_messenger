import React, { Component } from 'react'
import Messages from "./Messages"
import ChatInput from "./ChatInput"

export default class ChatApp extends Component {
    
    state = {
        messages: [],
    }
    
    // sendHandler = (message) => {
    //     const messageObject = {
    //         username: this.props.username,
    //         message
    //     }

    //     this.socket.emit("client:message", messageObject)
    //     messageObject.fromMe = true
    //     this.addMessage(messageObject)
    // }
    
    // REFACTOR THIS WITH THE SPREAD OPERATOR
    addMessage = (message) => {
        const messages = this.state.messages
        messages.push(message)
        this.setState({ messages })
    }

    render() {
        return (
            <div className="container">
            {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/3.0.3/socket.io.js"></script> */}
                <h3>spans_MESSENGER</h3>
                <Messages messages={ this.state.messages }/>
                <ChatInput onSend={ this.sendHandler }/>
            </div>
        )
    }
}
