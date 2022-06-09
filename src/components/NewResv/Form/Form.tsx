// React
import { useState } from 'react';

// Components
import DatePickers from './DateTimeInput/Datepicker/datepicker';
import SelectPeriod from './DateTimeInput/Period/periodInput';
import PersonInfo from './PersonInfo/PersonInfo';
import SubmitButton from './SubmitButton/SubmitButton';

// Material ui
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

// Constants
import { SMALL_PADDING, SMALL_MARGIN, TINY_MARGIN, NEW_RESV_MIDWIDTH } from '../Constants/style';
import { PersonData } from './PersonInfo/Interface/PersonData';
import { initPersonData } from '../Constants/initData';

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
  m : SMALL_MARGIN
}

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const Form = () => {
  const matches = useMediaQuery('(min-width:450px)');
  const [period, setPeriod] = useState('full_day');
  const [date, setDate] = useState<Date>(tomorrow);
  const [persons, setPersons] = useState<PersonData[]>([initPersonData]);

  console.log(persons);

  return (
    <Box sx={FormStyle} >
      <Typography variant="h4" gutterBottom component="div" sx={margin}>
        Form
      </Typography>

      <DatePickers matches={matches} date={date} setDate={setDate} />
      <SelectPeriod matches={matches} period={period} setPeriod={setPeriod} />

      <PersonInfo persons={persons} setPersons={setPersons}/>

      <SubmitButton />

    </Box>
  );
}

export default Form;
