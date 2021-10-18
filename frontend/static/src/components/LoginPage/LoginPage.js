import { useState } from 'react';
function LoginPage(props){

const [email, setEmail] = useState();
const [users, setUsers] = useState();
const [password, setPassword] = useState();


    function handleUserChange(event){
        setUsers(event.target.value);
    }
    function handlePasswordChange(event){
        setPassword(event.target.value);
    }
    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    function handleLoginSubmit(event){
        props.setSelection('Sidebar');
        event.preventDefault();
        props.Login();
        console.log(props)
        setUsers('');
        setEmail('');
        setPassword('');
    }
    

    return (
        <>
        <h2 className="login-h2">Log In</h2>
         <form className="form" action="" onSubmit={handleLoginSubmit}>
                <input name="name" value={users} type="text" placeholder="Username" onChange={handleUserChange}/>
                <input name="text" value={email} type="text" placeholder="Email"onChange={handleEmailChange}/>
                <input name='passwprd' value={password} type='password' placeholder='password' onChange={handlePasswordChange} />
                <button type="submit" className="submit_btn">Login</button>
            </form>
        </>
    )
}

export default LoginPage;