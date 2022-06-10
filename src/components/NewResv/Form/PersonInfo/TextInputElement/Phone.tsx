// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';


const Phone = (props : {value:string, setPhone:Function}) => {
  const { t } = useTranslation();
  const changePhone = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
  }

  return <TextField id="name-basic" label={t("phone_number")} variant="filled" onChange={changePhone} defaultValue={''} />
}

export default Phone;