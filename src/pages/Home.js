import React, { useState } from 'react'
import {v4 as uuidv4} from "uuid";
import  toast from 'react-hot-toast'
import {  useNavigate } from 'react-router-dom';

const Home = () => {
    const Navigate =useNavigate();
const [roomid,setRoomId]=useState('');


    const createNewRoom=(e)=>{
        e.preventDefault();
        const id = uuidv4().substr(0, 5).toUpperCase();
        // console.log(id);
        setRoomId(id);
        toast.success('Created New Room');


    }

    const joinRoom=()=>{
        if(!roomid ){
            toast.error("Enter Room ID")
            
        }

        else{
            toast.success("Room Joined")

        }
        

        // Redirect to room

        Navigate(`/editor/${roomid}`,{
            state:{
            roomid,
            
            }
        })
        

    }

    // Error  handling 

    const handleInputEnter=(e)=>{
       
       
        if(e.code ==='Enter'){
           joinRoom();
        }
    }
  return (
    <div className='homePageWrapper'>
        <div className='formwrapper'>
    <img src='/favicon.ico' alt='Pulp logo'/>
    <h4 className='mainLabel '>paste invitation code </h4>
        <div className='inputCode'>
            <input type="text" className='inputBox' onChange={(e)=>setRoomId(e.target.value)} value={roomid} placeholder='ENTER ID ' onKeyUp={handleInputEnter} ></input>
            <div className='inputBtn'>
            <button onClick={joinRoom}  className='btn joinbtn'>Join Room</button>
            <button onClick={createNewRoom}  className='btn btn2 joinbtn  '>Create Room</button>
            </div>
        </div>
        </div>
        <footer>
            {/* <h4>BUILT WITH❤️❤️❤️</h4> */}
        </footer>
    </div>
  )
}

export default Home