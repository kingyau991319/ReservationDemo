// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const Email = (props : {value:string, setEmail:Function}) => {
  const { t } = useTranslation();
  const changeEmail = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
  }

  return <TextField id="name-basic" label={t("email")} variant="filled" onChange={changeEmail} defaultValue={''} />
}

export default Email;