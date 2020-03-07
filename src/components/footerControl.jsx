import React from 'react';
import '../assets/footerControl.css';

export default function footerControl(props) {
  const copyProps = () => {
    const propsText = document.getElementById('border-radius-props');
    navigator.clipboard.writeText(propsText.value).then(()=>alert('Sucess')).catch(()=>alert('Fail'))
  }

  return (
    <>
      <p className='title'>Border-Radius: </p>
      <div className='footer-control'>
        {props.type === 'four' ? (
          <>
            <span className='props-values'>{props.values.topLeft} {props.values.topRight} {props.values.bottomRight} {props.values.bottomLeft}</span>
            <button className='copy-border' onClick={copyProps}>Copy</button>
            <input type="text" disabled id='border-radius-props' value={`${props.values.topLeft} ${props.values.topRight} ${props.values.bottomRight} ${props.values.bottomLeft}`}/>
          </>
        ):( 
          <>
            <span className='props-values'> {props.values.topLeftHorizontal} {props.values.topLeftVertical} {props.values.topRightHorizontal} {props.values.topRightVertical} / {props.values.bottomRightHorizontal} {props.values.bottomRightVertical} {props.values.bottomLeftHorizontal} {props.values.bottomLeftVertical}</span>
            <button className='copy-border' onClick={copyProps}>Copy</button>
            <input type="text" disabled id='border-radius-props' value={`${props.values.topLeftHorizontal} ${props.values.topLeftVertical} ${props.values.topRightHorizontal} ${props.values.topRightVertical} / ${props.values.bottomRightHorizontal} ${props.values.bottomRightVertical} ${props.values.bottomLeftHorizontal} ${props.values.bottomLeftVertical}`}/>
          </>
        )}
      </div>
    </>
  );
}
