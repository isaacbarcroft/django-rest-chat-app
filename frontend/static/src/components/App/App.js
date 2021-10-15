import './App.css';
import { useState, useEffect } from 'react';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import Cookies from 'js-cookie';
import MessageForm from './../MessageForm/MessageForm';
import MessageList from './../MessageList/MessageList';
import LogOut from './../LogOutPage/LogOutPage';
import Room  from './../Room/Room';
import Sidebar from './../Sidebar/Sidebar'

function App() {
  const [message, setMessage] = useState([])
  const [disable, setDisable] = useState(false);
  const [rooms, setRoom] = useState([]);
  
async function getMessages(event){
  const response = await fetch(`/api_v1/chats/${event.target.value}/messages/`);
  const data = await response.json();
  setMessage(data);
}


useEffect(() => {
    
  // GET request using fetch with async/await
  async function getRooms(){
  const response = await fetch('/api_v1/chats/');
  const data = await response.json();
  console.log(data);
  await setRoom(data);
  console.log('rooms', rooms);
  }// return menuItemsAPI
  getRooms();
},[])

  async function addRoom(name){
    const newRoom = {
      name: name, 

    };
    console.log(name);
    const response = await fetch('/api_v1/chats/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(newRoom),
    });
    if(response.ok){
      console.log(response)
      return response.json(); 
     
}  
setRoom([rooms,newRoom]);
  }


  async function submitMessage(name,event, text){
    console.log(event);
    const newMessage = {
      user: name, 
      room: event.target.id,
      body: text, 
    
    };
    console.log();
    const response = await fetch(`/api_v1/chats/${event.target.id}/messages/`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
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
    html = <RegistrationForm handleRegistration= {handleRegistration} />
  } else if (selection === 'LogOut'){
    html = <LogOut />
  } else if (selection ==='Room'){
    html = <Room  />
  } else if (selection ==='Sidebar'){
    html = <Sidebar rooms={rooms} addRoom={addRoom}/>
  }


  return (
    <div className="App">
      <button className="logout-btn"  onClick={() => {setDisable(true); setSelection('LogOut')}}>Log Out</button>
      {html}
      {console.log(message)}
      <MessageList message={message} submitMessage={submitMessage} rooms={rooms}/>
      <Sidebar rooms={rooms} getMessages={getMessages} addRoom={addRoom}/>
      {/* <MessageForm submitMessage={submitMessage} /> */}
    {/* <RegistrationForm handleRegistration={handleRegistration} />
    <MessageForm /> */}

    </div>
  );
}

export default App;
