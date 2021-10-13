import logo from './logo.svg';
import './App.css';

function App() {


  async function submitMessage(name, text){
    const newOrder = {
      user: name, 
      body: text, 
     
     
    };
    console.log(newOrder);
    const response = await fetch('https://django-restaurant-app--isaac.herokuapp.com/api_v1/orders/', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(newOrder),
    });
    if(response.ok){
      return response.json();
    
}  
  }




  return (
    <div className="App">
     
    </div>
  );
}

export default App;
