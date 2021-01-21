import React from "react";
import './Loading.scss';

const Loading = ({isVisible}) => {

  return (
    <div className={`holder ${isVisible ? 'show' : 'hide'} `}>
      <div className="preloader"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading;