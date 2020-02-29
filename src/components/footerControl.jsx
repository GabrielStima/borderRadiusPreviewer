import React from 'react';
import '../assets/footerControl.css';

export default function footerControl(props) {
  const copyProps = () => {
    const propsText = document.getElementById('border-radius-props');
    navigator.clipboard.writeText(propsText.value).then(()=>alert('Sucess')).catch(()=>alert('Fail'))
  }

  return (
    <div className='footer-control'>
      <p className='title'>Border-Radius: </p>
      <span className='props-values'>{props.value1} {props.value2} {props.value3} {props.value4} / {props.value5} {props.value6} {props.value7} {props.value8}</span>
      <button className='copy-border' onClick={copyProps}>Copy</button>
      <input type="text" disabled id='border-radius-props' value={`${props.value1} ${props.value2} ${props.value3} ${props.value4} / ${props.value5} ${props.value6} ${props.value7} ${props.value8}`}/>
    </div>
  );
}
