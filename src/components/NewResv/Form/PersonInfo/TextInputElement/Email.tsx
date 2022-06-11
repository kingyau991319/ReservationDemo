// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const isValidEmail = (email : string) : boolean => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) || email === '';

const Email = (props : {value:string, setEmail:Function}) => {
  const { t } = useTranslation();
  const { value, setEmail } = props;
  const changeEmail = (event: ChangeEvent<{value: string | null}>) => {
    const email = event.target.value ?? '';
    setEmail(email);
  }

  return (
    <TextField 
      id="name-basic"
      label={t("email")}
      variant="filled"
      error={!isValidEmail(value ?? '')}
      helperText={!isValidEmail(value ?? '') ? t("invalid_email") : null}
      onChange={changeEmail}
      defaultValue={''}
      inputProps={{ maxLength: 300 }} 
    />
  )}

export default Email;
