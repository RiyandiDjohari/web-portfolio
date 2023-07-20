import React from 'react'
import { ReactComponent as ToggleLightIcon } from '../Assets/toggle-light.svg';
import { ReactComponent as ToggleDarkIcon } from '../Assets/toggle-dark.svg';

const BtnToggleTheme = ({toggleTheme, isDarkMode}) => {

  return (
    <div>
      <button onClick={toggleTheme} className='btn-toggle-theme'>
        {
          isDarkMode ? (
            <ToggleLightIcon />
            ) : (
            <ToggleDarkIcon />
          )
        }
      </button>
    </div>
  )
}

export default BtnToggleTheme