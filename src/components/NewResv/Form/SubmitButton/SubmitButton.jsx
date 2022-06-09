// React
import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// Material ui
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const SubmitButton = () => {

  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      justifyContent="center"
    >
      <Button variant="contained">{t('submit')}</Button>
    </Box>
  )
}

export default SubmitButton