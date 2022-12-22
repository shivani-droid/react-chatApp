import { faker } from '@faker-js/faker'
import React, { createContext, useContext, useReducer, useState } from 'react'
import MsgReducer from './MessageReducer'
import PropTypes from 'prop-types'; 
let MsgContext = createContext(null)



const Context = ({children}) => {
  let [text, setText] = useState("");
    let [msgList,dispatch] = useReducer(MsgReducer,[{
        msg: "Hii All",
            user: "Shivanee yadav",
            frameColor: Math.floor(Math.random()*12345699).toString(16),
            likes:0,
            id: faker.datatype.uuid(),
            time:new Date().getHours() + " : " + new Date().getMinutes()

    }])
  return (
    <MsgContext.Provider value={{msgList,dispatch,text, setText}}>
    {children}
    </MsgContext.Provider>
  )
}

export function useMsgContext(){
return useContext(MsgContext)
}


Context.propTypes ={
  children: PropTypes.object.isRequired
}

export default Context