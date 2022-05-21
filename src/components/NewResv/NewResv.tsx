// Components
import Description from './Description/Description';
import ExtraInfo from './ExtraInfo/ExtraInfo';
import Form from './Form/Form';

// Material Ui
import Grid from '@mui/material/Grid';

const NewResv = () => {
  return (
    <Grid
      sx={{m : 'auto'}} 
      alignItems="center"
      container
      justifyContent="center"
    >
      <Grid container>
        <Description/>
      </Grid>
      <Grid container>
        <ExtraInfo/>
      </Grid>
      <Grid container>
        <Form/>
      </Grid>
    </Grid>
  )
}

export default NewResv;
