import { useState } from 'react';
function LoginPage(props){

const [users, setUsers] = useState({
    username: '',
    password: '',
});



    
const handleChange1 = (e) => {
    const {name, value} = e.target;  // == name = e.target.value & value = e.target.value
    setUsers(prevState => ({
        ...prevState,
        [name]: value,
    }));
}

    function handleLoginSubmit(event){
       
        event.preventDefault();
        props.Login(users);
        props.setSelection('MessageList');
        console.log(users)

    }
    

    return (
        <>
        <h2 className="login-h2">Log In</h2>
         <form className="form" action="" onSubmit={handleLoginSubmit}>
         <input type='text' 
                        className="" 
                        id="username" 
                        placeholder="enter username" 
                        required 
                        name="username" 
                        onChange={handleChange1}
                        value={users.username}
                        />
                <input name='password' value={users.password} type='password' placeholder='password' onChange={handleChange1} />
                <button type="submit" className="submit_btn">Login</button>
            </form>
        </>
    )
}

export default LoginPage;