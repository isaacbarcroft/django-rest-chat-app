import './App.css';
import { useState, useEffect } from 'react';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import Cookies from 'js-cookie';
import MessageForm from './../MessageForm/MessageForm'

function App() {
  const [message, setMessage] = useState('')

  async function submitMessage(name, text){
    const newMessage = {
      user: name, 
      body: text, 
    
    };
    console.log();
    const response = await fetch('https://django-rest-chat-app-isaac.herokuapp.com/api_v1/chats/' + this.room +' /message', {
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
  const handleRegistration = async (user) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    }
    const response = await fetch('/rest-auth/registration/', options)
    if(!response){
      console.warn(response);
    }else {
      const data = await response.json();
      Cookies.set('Authorization', `Token ${data.key}`);
    }
  }
  // function addMessage(title, price){

  //   const newMessageText = {
  //     , 
  //     price,
  //   }
  //   setOrder([...order, newOrderItem]);
  // }



  return (
    <div className="App">
    <RegistrationForm handleRegistration={handleRegistration} />
    <MessageForm />

    </div>
  );
}

export default App;
