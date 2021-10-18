import { useState } from 'react'

function PageLoad(props){


    return(
        <>
        <div className="LoginPage">
        <h4>Are You New Here?</h4>
        <p>set up a free account here</p>
        <button type="submit" className="registration-btn registration-btn-load" onClick={() => props.setSelection('RegistrationForm')}>Register</button>
        <h4>Been Here</h4>
        <button type="submit" className="login-btn-2 login_btn-load" onClick={() => props.setSelection('Login')}>Login</button>
        </div>

        
        </>
    )
}

export default PageLoad;

