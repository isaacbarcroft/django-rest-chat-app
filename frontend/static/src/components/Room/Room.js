import { useState } from 'react'

function PageLoad(props){


    return(
        <>
        <div>
        <button type="submit" className="registration-btn registration-btn-load" onClick={() => props.setSelection('RegistrationForm')}>Register</button>
        <button type="submit" className="login-btn-2 login_btn-load" onClick={() => props.setSelection('Login')}>Login</button>
        </div>

        
        </>
    )
}

export default PageLoad;

