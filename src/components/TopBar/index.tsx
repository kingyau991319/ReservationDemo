// React
import { useState, MouseEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

// I18n
import { useTranslation } from 'react-i18next';

// Material ui
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// Components
import ThemeModeBtn from './Button/ThemeModeBtn';
import LangcodeBtn from './Button/LangCodeBtn';

import "./css/TopBar.css";

const TopBar = () => {

  const location = useLocation().pathname;
  const curLangPath = location.split('/')[1];
  const curActionPath = location.split('/')[2];

  const { t } = useTranslation();

  const [mode, setmode] = useState(curActionPath);

  const handleModeChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    newAlignment !== null && setmode(newAlignment);
  };

  return (
    <div className='topbar'>
      <h1 className="topbar-title">Title</h1>

      <div className="topbar-float-left">
        <LangcodeBtn/>

        {/* dark mode(default) */}
        <ThemeModeBtn/>

        {/* decide new or search */}
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleModeChange}
        >
          <ToggleButton 
            value="new"
            component={Link}
            to={{pathname: curLangPath + "/new"}}
          >{t('new')}
          </ToggleButton>
          <ToggleButton 
            value="search"
            component={Link}
            to={{pathname: curLangPath + "/search"}}
          >{t('search')}
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  )
}

export default TopBar;
