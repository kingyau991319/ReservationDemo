// React
import React from 'react'

// i18n
import { useTranslation } from 'react-i18next'

// Material ui
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';

// Constants
import { TINY_MARGIN, SMALL_MARGIN } from '../../Constants/style'

// Interface
import { PersonData } from '../PersonInfo/Interface/PersonData'

const SubmitButton = (props: { persons: PersonData[] }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    // do some validation
    handleClose();
  };

  const { t } = useTranslation();

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ mt: TINY_MARGIN }}
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
          <Typography variant="h5" display="block" gutterBottom sx={{ mt:SMALL_MARGIN, mb: SMALL_MARGIN, ml: 10, mr: 10 }}>
            {t('submit_reservation') + ' ?'}
          </Typography>
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>{t('disagree')}</Button>
          <Button onClick={handleSubmit} autoFocus>{t('agree')}</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default SubmitButton
