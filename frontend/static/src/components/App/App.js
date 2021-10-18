import './App.css';
import { useState, useEffect } from 'react';
import RegistrationForm from './../RegistrationForm/RegistrationForm';
import Cookies from 'js-cookie';
import MessageForm from './../MessageForm/MessageForm';
import MessageList from './../MessageList/MessageList';
import LogOut from './../LogOutPage/LogOutPage';
import Sidebar from './../Sidebar/Sidebar'
import LoginPage from './../LoginPage/LoginPage';
import PageLoad from './../Room/Room';

function App() {
  const [message, setMessage] = useState([]);
  const [disable, setDisable] = useState(false);
  const [rooms, setRoom] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState({id: 0, name: ''});
  const [loggeedIn, setLoggedIn] = useState(false);
  const [show, setShow] = useState(true)
async function getMessages(event){
  const response = await fetch(`/api_v1/chats/${event.target.value}/messages/`);
  const data = await response.json();
  const matchedRoom = rooms.find(room => {
  const roomIdString = room.id.toString()
  return roomIdString===event.target.value
  })
  setSelectedRoom(matchedRoom)
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

/// ADD ROOM
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
      setRoom([...rooms, newRoom]);
      console.log({rooms})
      return response.json(); 
}  
  }

  async function Login(user){
    const response = await fetch('/rest-auth/login',{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    })
    if (!response){
      console.warn(response);
    } else{
      const data = await response.json();
      Cookies.set('Authorization', `Token ${data.key}`);
      if (data.key){

      }else {
        Cookies.remove('Authorization');
      }
    }
  }

  async function submitMessage(name, text){
    const newMessage = {
      user: name, 
      room: selectedRoom.id,
      body: text, 
    };
    console.log({newMessage});

    const response = await fetch(`/api_v1/chats/${selectedRoom.id}/messages/`, {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(newMessage),
    });
    setMessage([...message, newMessage])
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
    setSelection('Sidebar');
  }

 async function deleteMessage(event){
    console.log(event.room);
    console.log('delete function');
   const response = await fetch(`/api_v1/chats/${event.room}/messages/${event.id}/`, {
        method: 'DELETE',
        headers: {
          'X-CSRFToken': Cookies.get('csrftoken'),
        },
    });
  }




  const [selection, setSelection] = useState('Room')
  let html;


  if(selection === 'MessageForm') {
    html = <MessageForm />
  } else if(selection === 'Room'){
    html = <PageLoad setSelection={setSelection} selection={selection} />
  } else if (selection === 'MessageList'){
    html = <MessageList message={message} submitMessage={submitMessage} rooms={rooms} deleteMessage={deleteMessage} selectedRoom={selectedRoom} />
  }else if(selection === 'RegistrationForm'){
    html = <RegistrationForm handleRegistration= {handleRegistration} />
  } else if (selection === 'LogOut'){
    html = <LogOut />
  } else if (selection === 'Login'){
      html = <LoginPage  Login={Login} />
  } else if (selection ==='Sidebar'){
    html = <Sidebar rooms={rooms} getMessages={getMessages} addRoom={addRoom}/>
  }


  return (
    <div className="App">
      <header className="header">Slack 2.0
      <button className="logout-btn"  onClick={() => {setDisable(true); setShow(false); setSelection('Login')}}>Log Out</button>
      </header>
      {html}
      {console.log(message)}
      <MessageList style={{display: show ? 'block' : 'none' }} message={message} submitMessage={submitMessage} rooms={rooms} deleteMessage={deleteMessage} selectedRoom={selectedRoom}/>
      {/* <Sidebar rooms={rooms} getMessages={getMessages} addRoom={addRoom}/> */}
      {/* <MessageForm submitMessage={submitMessage} /> */}
    {/* <RegistrationForm handleRegistration={handleRegistration} />
    <MessageForm /> */}
    
    </div>
  );
}

export default App;
