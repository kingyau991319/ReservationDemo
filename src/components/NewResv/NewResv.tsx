// Components
import Description from './Description/Description';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import Form from './Form/Form';

// Material Ui
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

// Constants
import { SMALL_PADDING, SMALL_MARGIN, TINY_MARGIN, NEW_RESV_MIDWIDTH } from './Constants/style';

const FormStyle = {
  minWidth: NEW_RESV_MIDWIDTH,
  p : SMALL_PADDING,
  m : TINY_MARGIN,
}

const NewResv = () => {
  return (
    <Grid
      sx={{m : 'auto'}} 
      alignItems="center"
      container
      justifyContent="center"
    >
      <Grid container>
        <Box sx={FormStyle}>
          <Description/>
          <ExtraInfo/>
          <Form/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default NewResv;
