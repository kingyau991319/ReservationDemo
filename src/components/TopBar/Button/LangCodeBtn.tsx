// React
import { useState, MouseEvent } from 'react';
import { Link, useLocation } from "react-router-dom";

// Common function
import { setLangPath } from '../../../lib/routes';

// I18n
import { useTranslation } from 'react-i18next';

// Material-ui
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// When click this btn, it will change the langcode and change the url
const LangCodeBtn = () => {
  const { i18n } = useTranslation();

  // Accord the current path to decide the init language
  const location = useLocation().pathname;
  const initLangCode = location.split('/')[1];

  // TODO: set cookies ？
  const [langCode, setLangCode] = useState(initLangCode);

  const changeLandCode = (
    event: MouseEvent<HTMLElement>,
    newlangCode: string,
  ) => {
    if (newlangCode !== null) {
      setLangCode(newlangCode);
      i18n.changeLanguage(newlangCode);
    }
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={langCode}
      exclusive
      onChange={changeLandCode}
      sx={{ border: 0 }}
    >
      <ToggleButton 
        value="en"
        sx={{ border: 0, borderRadius: 0 }}
        to={{pathname: setLangPath(location, "en")}}
        component={Link}
      >
        en
      </ToggleButton>
      <ToggleButton 
        value="zh-HK"
        sx={{ border: 0, borderRadius: 0 }}
        to={{pathname: setLangPath(location, "zh-HK")}}
        component={Link}
      >
        繁
      </ToggleButton>
      <ToggleButton 
        value="zh-CN"
        sx={{ border: 0, borderRadius: 0 }}
        to={{pathname: setLangPath(location, "zh-CN")}}
        component={Link}
      >
        简
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default LangCodeBtn;
