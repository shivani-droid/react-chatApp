import { faker } from '@faker-js/faker'
import React from 'react'
import { useMsgContext } from '../../Main/Context'

const Model = () => {
    let {text,setText} = useMsgContext();
    const user_list = ["Alan", "Bob", "Carol", "Dean", "Elin"]
    let [,searchText = ""] = text.split("@") 
    function handleClick(e)
    {
      let name = e.target.textContent;
      setText(prv=>{
        let [newText] = prv.split("@");
        return `${newText} ${name}` 
      })
    }
    // console.log(searchText);
  return (
    <div className='model rounded shadow'>
        {user_list.filter(user =>user.toLowerCase().includes(searchText.toLowerCase())).map(user=> (<li 
          key={faker.datatype.uuid()} 
        onClick ={(e)=>handleClick(e)}
        > {user} </li>)  )}
    </div>
  )
}

export default Model