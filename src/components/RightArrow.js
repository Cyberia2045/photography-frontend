import React, { Component } from 'react';

const RightArrow = (props) => {

  return (
    <div onClick={props.nextSlide} className="nextArrow">
    </div>
  );
}

export default RightArrow;