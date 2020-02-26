import React from 'react';
import '../assets/footerControl.css';

export default function footerControl(props) {
  return (
    <div className='footer-control'>
      <p className='title'>Border-Radius: </p>
      <span className='props-values'>{props.value1} {props.value2} {props.value3} {props.value4} / {props.value5} {props.value6} {props.value7} {props.value8}</span>
      <button className='copy-border'>Copy</button>
    </div>
  );
}
