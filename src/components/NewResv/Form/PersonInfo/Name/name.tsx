import React from 'react'

// textField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const Name = (props) => {
  const { t } = useTranslation();
  const { inputRef } = props;

  return (
    <>
      <TextField id="name-basic" label={t("name")} variant="filled" inputRef={inputRef} defaultValue={''} />
    </>
  )
}

export default Name;