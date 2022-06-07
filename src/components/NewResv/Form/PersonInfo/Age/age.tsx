import React from 'react'

// textField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';


const Age = (props: { value : number; inputRef : any; }) => {
  const { inputRef } = props;
  const { t } = useTranslation();

  return (
    <>
      <TextField id="name-basic" label={t("age")} variant="filled" inputRef={inputRef} defaultValue={''} />
    </>
  )
}

export default Age;