import { useState } from "react"

function MessageForm(props){

const [names, setName] = useState('');
const [texts, setText] = useState('');


    return (
        <>
            <form className="form" action="">
                <input name="name" type="text" placeholder="name"/>
                <input name="text" type="text" placeholder="text"/>
                <button type="submit" className="submit_btn">Subtmit</button>
            </form>
        </>
    )}

export default MessageForm;