// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const Age = (props: {value:number}) => {
  const { t } = useTranslation();
  const changeAge = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
  }
  return <TextField id="name-basic" label={t("age")} variant="filled" onChange={changeAge} defaultValue={''} />
}

export default Age;