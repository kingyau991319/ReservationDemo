// React
import { useState } from 'react';

// Material ui
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

// Icon
import CloseIcon from '@mui/icons-material/Close';
import DiscountIcon from '@mui/icons-material/Discount';

// Constants
import { SMALL_PADDING, TINY_MARGIN,  NEW_RESV_MIDWIDTH } from '../constants/style';

const ExtraInfo = () => {
  const [open, setOpen] = useState(true);

  return (
    <Box 
      sx={{ 
        width: '100%',
        minWidth: NEW_RESV_MIDWIDTH,
        p : SMALL_PADDING,
        mt : TINY_MARGIN,
      }}
    >
      <Collapse in={open}>
        <Alert
          severity="info"
          icon={<DiscountIcon fontSize="inherit"/>} 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          <AlertTitle>
            <Typography variant="h6" align="justify">
              Discount
            </Typography>
          </AlertTitle>
          <Typography align="justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus ea deleniti excepturi ratione commodi neque illo laborum esse recusandae sed dolore natus cupiditate distinctio, voluptatum magni? Sequi, temporibus! Ullam.
          </Typography>
        </Alert>
      </Collapse>
    </Box>
  );
}

export default ExtraInfo;