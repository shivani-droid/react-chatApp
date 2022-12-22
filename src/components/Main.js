import React, { useEffect, useRef } from "react";
import { useMsgContext } from "../Main/Context";
import { faker } from '@faker-js/faker';
import Msg from "./Msg";
const Main = () => {
  let { msgList } = useMsgContext();
  let scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, [msgList]);
  return (
    <div className="main container-fluid bg-light-grey">
        <div className="msg-box">
          {msgList.length > 0 && msgList.map((msg) => <Msg key={faker.datatype.uuid()} msg={msg}/>)}
         <div ref={scrollRef} className="dummy-box"></div>
        </div>
    </div>
  );
};

export default Main;
