import React, { useState, useRef } from 'react';
import useCollapse from 'react-collapsed';


const Collapsible = (props) => {
  const contentRef = useRef();

  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <div>
      <button onClick={toggle}>{props.label}</button>
      {open && (
        // <div className="toggle">
        //   <h4>{props.children}</h4>
        // </div>
        <div className={open ? "content-show" : "content-parent"}>
          <div className='content'> {props.children} </div>
        </div>
        // <div className="content-parent"
        //   ref={contentRef} style={open ? { height: contentRef.current.scrollHeight + "px" } : { height: "0px" }}>
        //   <div className="content">{props.children}</div>
        // </div>
      )}
    </div>
  );
};

export default Collapsible;
