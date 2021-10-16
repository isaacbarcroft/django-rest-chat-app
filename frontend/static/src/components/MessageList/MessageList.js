import { useState } from 'react' 

function MessageList(props) {

console.log('props', props.message)

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
    props.submitMessage(names, texts, props.rooms);
    console.log(props)
    setName('');
    setText('');
}
console.log(props.rooms)

const messageItems = props.message?.map(message => <div key={message.id} value={message.room}><h4>{message.user}</h4><p>{message.body}</p><button className="btn-primary" value={message.id} onClick={() => props.deleteMessage(message)}>Delete</button></div>);
    return(
        <>
        {messageItems}
        <form className="Message-form"  onSubmit={handleSubmit }>
                <input name="name" value={names} type="text" placeholder="name" onChange={handleNameChange}/>
                <input name="text" value={texts} type="text" placeholder={`Room: ${props.selectedRoom?.name}`} onChange={handleTextChange}/>
                <button type="submit" className="submit_btn">Subtmit</button>
        </form>
        </>
    )
    }

export default MessageList;