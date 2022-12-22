
const MessageReducer = (state,action) => {
    switch(action.type)
    {
        case "send":
            return [...state,action.payload]
        case "increase":
            {
            let list = state.map(msg=>{
                if(msg.id===action.payload)
                {
                    msg.likes +=1;
                    return msg 
                }
                else {
                    return msg
                }

            })
                
        return [...list]
            }
        default:
            return state;
    }
}

export default MessageReducer