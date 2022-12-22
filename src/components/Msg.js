import React from 'react'
import { AiFillLike } from 'react-icons/ai'
import { useMsgContext } from '../Main/Context'
import PropTypes from 'prop-types'; 
const Msg = (props) => {
    let {dispatch} = useMsgContext()
    let {msg} = props
    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
    let current = user_list.find(user=> msg.msg.includes(user))
    let [msgStart,msgEnd] = msg.msg.split(current)
  return (
    <div className='msg my-3'>
    <div className='avatar' style={{backgroundColor:'#'+ msg.frameColor,width:"50px",height:"50px",borderRadius:"50px", border:"2px solid white"}}>
        <div className="avatar-text">{msg.user.split(" ").map(name=>name[0].toUpperCase())}</div>
    </div>
    <div className="user">
        <div className="user-details">
        <div className="user-name fw-bold">{msg.user}</div>
        <div className="msg-time">{msg.time}</div>
        </div>
    <p className="user-msg ms-2 my-2">

        {msgStart} <span style={{color:"blue"}} >{(current ??"")}</span>{( msgEnd ??"")} 
    </p>
    </div>
    <div className="msg-like ms-auto me-3">
    <AiFillLike fontSize={20} onClick={()=>{
        dispatch({
            type:"increase",
            payload : msg.id
        })
    }} />
    {msg.likes >0 && <sup><div className='badge bg-success'>{msg.likes}</div></sup> }
    </div>
    
    </div>
  )
}

Msg.propTypes ={
    msg: PropTypes.object.isRequired
}

export default Msg