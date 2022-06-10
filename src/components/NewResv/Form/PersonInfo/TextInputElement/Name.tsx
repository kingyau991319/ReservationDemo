// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const Name = (props : {value:string, setName:Function}) => {
  const { t } = useTranslation();
  const changeName = (event: ChangeEvent<{ value: string | null }>) => {
    console.log(event.target.value);
  }

  return <TextField id="name-basic" label={t("name")} variant="filled" onChange={changeName} defaultValue={''} />
}

export default Name;
