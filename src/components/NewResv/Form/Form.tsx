// i18n
import { useTranslation } from 'react-i18next';

// Components
import DatePickers from './DateTimeInput/Datepicker/datepicker';
import SelectPeriod from './DateTimeInput/Period/periodInput';
import PersonInfo from './PersonInfo/PersonInfo';

// Material ui
import Box, { BoxProps} from '@mui/material/Box';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// Constants
import { SMALL_PADDING, TINY_MARGIN, NEW_RESV_MIDWIDTH } from '../Constants/style';

const FormStyle = {
  width: '100%',
  minWidth: NEW_RESV_MIDWIDTH,
  p : SMALL_PADDING,
  mt : TINY_MARGIN,
  ml : TINY_MARGIN,
  mr : TINY_MARGIN,
  border: 3,
  borderColor: 'grey.100',
  borderRadius: 2
}

const margin = {
  m : 3
}

const Form = () => {
  const matches = useMediaQuery('(min-width:450px)');

  return (
    <Box sx={FormStyle} >
      <Typography variant="h4" gutterBottom component="div" sx={margin}>
        Form
      </Typography>

      <DatePickers matches={matches}/>
      <SelectPeriod matches={matches}/>

      <PersonInfo/>

    </Box>
  );
}

export default Form;
