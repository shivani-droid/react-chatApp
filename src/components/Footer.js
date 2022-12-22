import { faker } from "@faker-js/faker";
import React, { useEffect, useRef } from "react";
import { BiSend } from "react-icons/bi";
import { useMsgContext } from "../Main/Context";
import InputEmojiWithRef from "react-input-emoji"
import Model from "./UserList/Model";
const Footer = () => {
 
  let inputRef = useRef();
  let{msgList,dispatch,text, setText} = useMsgContext();
  const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
  useEffect(()=>{
    // inputRef.current.focus()
  },[msgList])

  function HandleClick(){
    if(text)
   {
    dispatch({
        type:"send",
        payload:{
            msg: text,
            user: user_list[Math.floor(Math.random() * user_list.length)],
            frameColor: Math.floor(Math.random()*12345699).toString(16),
            likes:0,
            id: faker.datatype.uuid(),
            time:new Date().getHours() + " : " + new Date().getMinutes()
        }   
    })
    setText("")
   }

  }

  return (
    <div className="input-area container-fluid bg-light-grey">
    {text.includes("@") && <Model />}
    <InputEmojiWithRef 
    ref={inputRef}
    placeholder="Type Message"
    value={text}
    onChange={setText}
    onEnter ={HandleClick}
     />

      <BiSend fontSize={32} onClick={HandleClick}  />
    </div>
  );
};

export default Footer;

