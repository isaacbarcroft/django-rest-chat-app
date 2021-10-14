import './App.css';
import { useState, useEffect } from 'react';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import Cookies from 'js-cookie';
import MessageForm from './../MessageForm/MessageForm';
import MessageList from './../MessageList/MessageList';

function App() {
  const [message, setMessage] = useState([])

  useEffect(() => {
    
    // GET request using fetch with async/await
    async function getMessages(){
    const response = await fetch('/api_v1/chats/1/message/');
    const data = await response.json();
    console.log(data);
    await setMessage(data);
    console.log(message);
    }// return menuItemsAPI
    getMessages();
},[])

  async function submitMessage(name, text){
    const newMessage = {
      user: name, 
      body: text, 
    
    };
    console.log();
    const response = await fetch('/api_v1/chats/1/message', {
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
    setSelection('MessageForm');
  }
  // function addMessage(title, price){

  //   const newMessageText = {
  //     , 
  //     price,
  //   }
  //   setOrder([...order, newOrderItem]);
  // }
  const [selection, setSelection] = useState('RegistrationForm')
  let html;

  if(selection === 'MessageForm') {
    html = <MessageForm />
  } else if (selection === 'MessageList'){
    html = <MessageList message={message} />
  }else if(selection === 'RegistrationForm'){
    html = <RegistrationForm handleRegistration={handleRegistration}/>
  // } else if (selection === 'BookMarking'){
  //   html = <BookMarking />
  }


  return (
    <div className="App">
      {/* {html} */}
      {console.log(message)}
      <MessageList message={message} />
    {/* <RegistrationForm handleRegistration={handleRegistration} />
    <MessageForm /> */}

    </div>
  );
}

export default App;
