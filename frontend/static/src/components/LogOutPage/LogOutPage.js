import Cookies from 'js-cookie';
function LogOut(props){

    async function loggingOut(){
        const response = await fetch('/rest-auth/logout/',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                // 'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(),
            })
            if (!response.ok){
            console.warn(response);
            } else {
                const data = await response.json();
                Cookies.remove('Authorization');
                props.setSelection('Login')
            }
            }
            


    return(
        <>
        

        <button className="logout-btn"  onClick={() => loggingOut()}>Log Out</button>
        
        </>
    )
}

export default LogOut;