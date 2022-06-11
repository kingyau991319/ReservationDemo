// React
import { ChangeEvent } from 'react';

// Material ui
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

// i18n
import { useTranslation } from 'react-i18next';

const Phone = (props : {value:string, setPhone:Function}) => {
  const { t } = useTranslation();
  const { value, setPhone } = props;
  const changePhone = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
    setPhone(event.target.value);
  }
  // <TextField id="name-basic" label={t("phone_number")} variant="filled" onChange={changePhone} defaultValue={''} inputProps={{ maxLength: 30 }} />

  return (
    <TextField 
      label={t("phone_number")}
      id="name-basic"
      variant="filled"
      // error={!isValidAge(value)}
      // helperText={!isValidAge(value) ? "Age is too large or too small" : null}
      InputProps={{
        startAdornment: <InputAdornment position="start">+852</InputAdornment>,
      }}
      // onChange={}
      defaultValue={''}
    />
  )}

export default Phone;
