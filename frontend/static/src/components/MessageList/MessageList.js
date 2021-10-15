import { useState } from 'react' 

function MessageList(props) {

console.log('props',props.message)

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


const messageItems = props.message?.map(message => <div value={message.room}><h4>{message.user}</h4><p>{message.body}</p></div>  );
    return(
        <>
        {messageItems}
        <form className="form" action="" onSubmit={handleSubmit}>
                <input name="name" value={names} type="text" placeholder="name" onChange={handleNameChange}/>
                <input name="text" value={texts} type="text" placeholder="text"onChange={handleTextChange}/>
                <button type="submit" className="submit_btn">Subtmit</button>
        </form>
        </>
    )
}

export default MessageList;