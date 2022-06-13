// React
import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// Material ui
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

// Constants
import { TINY_MARGIN } from '../../Constants/style'

// Interface
import { PersonData } from '../PersonInfo/Interface/PersonData'

const SubmitButton = (props: {persons : PersonData[]}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{mt: TINY_MARGIN}}
      >
        <Button variant="contained" onClick={handleClickOpen}>{t('submit')}</Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {t("submit_item") + ' ?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SubmitButton