import { useState } from 'react' 

function MessageList(props) {
//   const  html  = (message => <div>{message}</div>);
console.log('props',props)
console.log('props',props.message)
// console.log(props.message[0].user)
const messageItems = props.message?.map(message => <div><h4>{message.user}</h4><p>{message.body}</p></div>  );
const previewHTML = (
    <>
<div class="menuItemList">
    <h3 className="itemName">{props.message?.user}</h3>
    <p>{` ${props.message?.body}`}</p>
    </div>
    </>
)
    return(
        <>
        {messageItems}
        {/* {messageItems} */}
        </>
    )
}

export default MessageList;