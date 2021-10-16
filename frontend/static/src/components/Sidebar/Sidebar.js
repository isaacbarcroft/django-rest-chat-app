import { useState } from 'react'
function Sidebar(props){
    const [room, setRoom] = useState({
        name: '',
    })

    const roomList = props.rooms.map(room => <div><button key={room.name} onClick={props.getMessages} type="button" value={room.id}>{room.name}</button></div>  );

    function handleChange(event) {
        setRoom(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        props.addRoom(room);
        // setRoom('');
    }

    return(
        <>
        <nav className='nav-bar'>{roomList}</nav>
        <form onSubmit={props.addRoom} className="room-form" onSubmit={handleSubmit} >
        <input type='text' palceholder="New Room" name="new-room" onChange={handleChange} />
        <button type='submit' className="addRoom">Add Room</button>
        </form>
        </>
    )
}

export default Sidebar;