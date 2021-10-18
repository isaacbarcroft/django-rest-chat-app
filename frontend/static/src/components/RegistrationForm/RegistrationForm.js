import { useState } from 'react';


function RegistrationForm(props){
    const [user, setUser] = useState({
        username: '',
        email: '',
        password1: '', 
        password2: '',
    });

    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target;  // == name = e.target.value & value = e.target.value
        setUser(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.password1 !== user.password2){
            setError('Passwords do not match!');
        }else {
            props.handleRegistration(user);
        }

    }


    return(
        <>
        <h2 className='Registration-title'>Register</h2>
       <form stytle={{margin: '0 20px'}} className="mt-3" onSubmit={handleSubmit}>
           <div className="form-group text-left mb-3">
                <label htmlFor="username">Username</label>
                <input type='text' 
                        className="form-control" 
                        id="username" 
                        placeholder="enter username" 
                        required 
                        name="username" 
                        onChange={handleChange}
                        value={user.username}
                        />
           </div>
           <div className="form-group text-left mb-3">
                <label htmlFor="email">Email</label>
                <input type='email' 
                        className="form-control" 
                        id="email" 
                        placeholder="enter email" 
                        required 
                        name="email" 
                        onChange={handleChange}
                        value={user.email}
                        />
           </div>
           <div className="form-group text-left mb-3">
                <label htmlFor="password1">Password</label>
                <input type='password' 
                        className="form-control" 
                        id="password1" 
                        placeholder="enter password" 
                        required 
                        name="password1" 
                        onChange={handleChange}
                        value={user.password1}
                        />
           </div>
           <div className="form-group text-left mb-3">
                <label htmlFor="password2">Confirm Password</label>
                <input type='password' 
                        className="form-control" 
                        id="password2" 
                        placeholder="confirm password" 
                        required 
                        name="password2" 
                        onChange={handleChange}
                        value={user.password2}
                        />
                <span className="text-danger">{error}</span>
           </div>
           <button type="submit" className="registration-btn mt-3">Register</button>



       </form>   
       </>
    )
}

export default RegistrationForm;