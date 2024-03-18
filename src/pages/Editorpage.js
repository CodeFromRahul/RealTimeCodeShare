import React ,{useState,useRef,useEffect} from 'react'
import Client from '../components/client';
import Editor from '../components/Editors';
import { initSocket } from '../socket';
import ACTIONS from '../Actions';
import Toast from 'react-hot-toast';
import { useLocation , useNavigate, Navigate} from 'react-router-dom';

import client from '../components/client';
import toast from 'react-hot-toast';
const Editorpage = () => {
  const socketRef = useRef(null);
  const location = useLocation();
  const reactNavigator =useNavigate();

  useEffect(()=>{
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.on('connect_error',(err)=>handleErrors(err));
      socketRef.current.on('connect_failed',(err)=>handleErrors(err));

      function handleErrors(e){
        console.log('socket error',e);
        Toast.error('socket connection failed ,try again later ');
        reactNavigator('/');
      }

      socketRef.current.emit(ACTIONS.JOIN,{
        roomid:location.state.roomid,
      });

      // Listining for joined event
      socketRef.current.on(ACTIONS.JOINED,({clients,roomid,socketId})=>{})
              if(roomid!=location.state.roomid){
                
              }
    };
    init();
  },[]);


  const [clients,setclients] =useState([
    {sockedid:1},
    {sockedid:3},
    {sockedid:2 },
    {sockedid:24}
  ]);
 
  if(!location.state){
    return <Navigate to="/"/>;

  }

  


  return (
    <div className='mainWrap'>
      <div className='aside'>
         <div className='asideInner'>
          <div className='logo'>
            <img src='/favicon.ico' alt='Logo' />
          </div>
          <h3>Connected</h3>
          <div className='clientsList'>
           {
            clients.map(client=>(

            <Client username={Client.sockedid} key={Client.sockedid}/>))
           }
          </div>
         </div>
         <button className='btn copybtn'>Copy Room Id</button>
         <button className='btn leavebtn'>Leave</button>
      </div>
      <div className='editorwrap'>
        <Editor/>
      </div>
    </div>
  )
}

export default Editorpage