import { useState } from "react";

function Chat() {
  const [chat, setChat]= useState([]);
  const [msg, setMsg]= useState({text:'', type:''});
  function handleSend(type){
    setChat([...chat, {...msg, type}])
    setMsg({text:'', type:''})
  }
  
  return (
    <>
    <button onClick={()=>handleSend('sent')}>Sent</button>
    <input placeholder="Enter text" 
      type="text"
      value={msg.text}
      onChange={(e)=>setMsg({...msg, text:e.target.value})}></input>
    <button onClick={()=>handleSend('recvd')}>Recvd</button>

    <div>
      {
        chat.map((item)=> <p key={item.text} style={{color: item.type == 'recvd' ? 'green' : 'red'}}>{item.text}</p>

        )
      }
    </div>
    </>
  )
}

export default Chat;
