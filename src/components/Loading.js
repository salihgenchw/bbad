import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <div style={{display:'flex',justifyContent:'center'}}>
    <ReactLoading type={type} color={color} height={"5%"} width={"5%"} />
  </div>
  
);

export default Loading;
