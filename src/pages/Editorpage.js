import React ,{useState,useRef,useEffect}from 'react'
import Client from '../components/client';
import Editor from '../components/Editors';
import { initSocket } from '../socket';
import ACTIONS from '../Actions';
const Editorpage = () => {
  const socketRef = useRef(null);
  
  useEffect(()=>{
    const init = async () => {
      socketRef.current = await initSocket();
      socketRef.current.emit(ACTIONS.JOIN,{
        roomId,
      })
    };
  },[]);


  const [clients,setclients] =useState([
    {sockedid:1},
    {sockedid:3},
    {sockedid:2 },
    {sockedid:24}
  ]);



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