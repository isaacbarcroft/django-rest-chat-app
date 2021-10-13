import { useState } from "react"

function MessageForm(props){

const [names, setName] = useState('');
const [texts, setText] = useState('');


    return (
        <>
            <form class="form" action="">
                <input name="name" type="text" placeholder="name"/>
                <input name="text" type="text" placeholder="text"/>
                <button type="submit" class="submit_btn">Subtmit</button>
            </form>
        </>
    )}