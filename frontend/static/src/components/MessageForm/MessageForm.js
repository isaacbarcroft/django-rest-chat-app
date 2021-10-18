import { useState } from "react"

function MessageForm(props){

const [names, setName] = useState('');
const [texts, setText] = useState('');


function handleNameChange(event){
    setName(event.target.value);
}
function handleTextChange(event){
    setText(event.target.value);
}
function handleSubmit(event){
    event.preventDefault();
    props.submitMessage(names, props.rooms?.id, texts);
    console.log(props)
    setName('');
    setText('');
}


    return (
        <>
            <form className="form input-group mb-3" action="" onSubmit={handleSubmit}>
                <input className="form-control" name="name" value={names} aria-label="Recipient's username" aria-describedby="basic-addon2" type="text" placeholder="name" onChange={handleNameChange}/>
                <input name="text" value={texts} type="text" placeholder="text"onChange={handleTextChange}/>
                <button type="submit" className="btn-submit" >Subtmit</button>
            </form>
        </>
    )}

export default MessageForm;