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
        <div className='side-bar-nav'>
        <h3>Rooms</h3>
        <nav className='nav-bar'>{roomList}</nav>
        <form onSubmit={props.addRoom} className="room-form" onSubmit={handleSubmit} >
        <input type='text' palceholder="New Room" name="new-room" onChange={handleChange} style={{width: '50%'}} />
        <button type='submit' className="addRoom">Add Room</button>
        </form>
        </div>
        </>
    )
}

export default Sidebar;