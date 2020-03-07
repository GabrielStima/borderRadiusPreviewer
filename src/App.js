import React, { useState } from 'react';
import './assets/App.css';
import FourValues from './components/fourValues'
import EightValues from './components/eightValues'

function App() {
  const [optionSelect, setOptionSelect] = useState(0);

  const changeOption = (value) => {
    if(value !== optionSelect){
      setOptionSelect(value);
    }
  };

  return (
    <div className="App">
      <h1>Border Radius Previewer</h1>  
       <div className='application-body'>
         <button className='button-option' onClick={()=>changeOption(1)}>4 Control</button>
         <button className='button-option' onClick={()=>changeOption(2)}>8 Control</button>
       </div>
       {optionSelect === 0 ? (
          <>
            <p className='description'>Choose an option to get started</p>
          </>
       ): optionSelect === 1 ? (
          <>
            <FourValues/>
          </>
       ) : optionSelect === 2 && (
         <>
            <EightValues/>
         </>
       ) }
    </div>
  );
}

export default App;