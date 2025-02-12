import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./App.css";

const socket = io("http://localhost:8080");

function App() {
  const [newMessage, setNewMessage] = useState("");
  const [username, setUsername] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!username) {
      const value = prompt("Insert your username");
      setUsername(value);
    }
    socket.on("messages", (data) => {
      setMessages(data);
    });
  }, [username]);

  const sendMessage = () => {
    try {
      const message = {
        username,
        message: newMessage,
      };
      socket.emit("chat:message", message);
      setNewMessage("");
      socket.on("messages", (data) => {
        setMessages(data);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>SEND</button>
      <>
        {messages &&
          messages.map((msg) => {
            return (
              <p>
                <strong>{msg.username}</strong>: {msg.message}
              </p>
            );
          })}
      </>
    </>
  );
}

export default App;
