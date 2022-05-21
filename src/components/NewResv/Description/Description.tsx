import * as React from 'react';

// Material-ui
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Constants
import { MARGIN, SMALL_PADDING, NEW_RESV_MIDWIDTH } from '../Constants/style';

const Description = () => {
  return (
    <Stack sx={{ 
      minWidth: NEW_RESV_MIDWIDTH, 
      width: '100%' ,
      p : SMALL_PADDING,
      m : MARGIN,

    }}>
      <Typography component="div" align="justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore accusamus ea deleniti excepturi ratione commodi neque illo laborum esse recusandae sed dolore natus cupiditate distinctio, voluptatum magni? Sequi, temporibus! Ullam.
      </Typography>
        {/* TODO: */}
      <Button sx={{float: 'right', mr: MARGIN }} size="small">More ...</Button>
      {/* Add image */}
    </Stack>
  );
}
export default Description;
