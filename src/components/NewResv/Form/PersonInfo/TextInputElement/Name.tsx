// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const Name = (props : {value:string, setName:Function})  => {
  const { t } = useTranslation();
  const { setName, value } = props;
  const changeName = (event: ChangeEvent<{ value: string | null }>) => {
    setName(event.target.value);
  }

  return <TextField id="name-basic" label={t("name")} variant="filled" onChange={changeName} defaultValue={''} inputProps={{ maxLength: 300 }} />
}

export default Name;
