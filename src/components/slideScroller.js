import React, { Component } from 'react';
	
const SlideScroller = (props) => {
  return (
    <div onClick={props.slideScroll} className="downArrow">
    </div>
  );
}

export default SlideScroller;