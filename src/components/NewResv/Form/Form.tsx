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
import { PersonData } from './PersonInfo/Interface/PersonData';
import { initPersonData } from '../Constants/initData';
import { TINY_MARGIN } from '../Constants/style';

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

const Form = () => {
  const [period, setPeriod] = useState('full_day');
  const [date, setDate] = useState<Date>(tomorrow);
  const [persons, setPersons] = useState<PersonData[]>([initPersonData]);

  //  MediaQuery
  const matches = useMediaQuery('(min-width:450px)');

  return (
    <>
      <Typography variant="h4" sx={{mt: TINY_MARGIN}}>
        Form
      </Typography>

      <DatePickers matches={matches} date={date} setDate={setDate} />
      <SelectPeriod matches={matches} period={period} setPeriod={setPeriod} />
      <PersonInfo persons={persons} setPersons={setPersons} />

      <SubmitButton persons={persons}/>

    </>
  );
}

export default Form;
