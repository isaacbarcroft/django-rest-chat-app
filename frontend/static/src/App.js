import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('')

  async function submitMessage(name, text){
    const newMessage = {
      user: name, 
      body: text, 
    
    };
    console.log();
    const response = await fetch('https://django-rest-chat-app-isaac.herokuapp.com/api_v1/chats/{}/message', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newMessage),
    });
    if(response.ok){
      return response.json(); 
}  
  }
  function addMessage(title, price){

    const newMessageText = {
      , 
      price,
    }
    setOrder([...order, newOrderItem]);
  }



  return (
    <div className="App">
     <MessageForm 

    </div>
  );
}

export default App;
