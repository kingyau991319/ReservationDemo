// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';


const Gender = (props : {value:string, setGender:Function}) => {
  const { t } = useTranslation();
  const { setGender } = props;
  const changeGender = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
    setGender(event.target.value);
  }

  return <TextField id="name-basic" label={t("gender")} variant="filled" onChange={changeGender} defaultValue={''} />
}

export default Gender;
