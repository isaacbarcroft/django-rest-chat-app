import { useState } from 'react'
function Sidebar(props){
    const [room, setRoom] = useState()

    const roomList = props.rooms.map(room => <div><button onClick={props.getMessages} type="button" value={room.id}>{room.name}</button></div>  );

    function handleChange(event) {
        setRoom(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.addRoom(room);
        setRoom('');
    }

    return(
        <>
        <nav>{roomList}</nav>
        <form onSubmit={props.addRoom} className="room-form" onSubmit={handleSubmit} >
        <input type='text' palceholder="New Room" name="new-room" onChange={handleChange} />
        <button type='submit' className="addRoom">Add Room</button>
        </form>
        </>
    )
}

export default Sidebar;