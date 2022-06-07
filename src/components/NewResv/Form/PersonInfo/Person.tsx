// React
import { useRef } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Constants
import { MEDIUM_PADDING, SMALL_MARGIN } from '../../Constants/style';

// Component
import Name from './Name/name';
import Age from './Age/age';
import Email from './Email/email';
import Phone from './Phone/phone';
import Remark from './Remark/remark';

// interface
import { PersonData } from './Interface/PersonData';

const Person = 
  (props : {
    person : PersonData,
    idx: number,
    length: number,
    deletePerson: Function
  }) => {
  const { t } = useTranslation();

  const {
    length,
    idx,
    deletePerson
  } = props;

  const { 
    name,
    age,
    email,
    phone,
    remark
  } = props.person;

  const nameRef   = useRef(name);
  const ageRef    = useRef(age);
  const emailRef  = useRef(email);
  const phoneRef  = useRef(phone);
  const remarkRef = useRef(remark);

  return (
    <Box sx={{border: 1 , p: MEDIUM_PADDING, m: SMALL_MARGIN}} >
      <Typography variant="subtitle1" display="block" gutterBottom sx={{mb: SMALL_MARGIN}} >
        {t('person_information') + (idx + 1)}
      </Typography>

      <Grid container spacing={{xs: 2}} columns={{ xs: 4, sm: 8}}>
        <Grid item xs={6} sm={4} md={4} >
          <Name value={name} inputRef={nameRef} />
        </Grid>
        <Grid item xs={6} sm={4} md={4} >
          <Age value={age} inputRef={ageRef} />
        </Grid>
        <Grid item xs={6} sm={4} md={4} >
          <Email value={email} inputRef={emailRef} />
        </Grid>
        <Grid item xs={6} sm={4} md={4} >
          <Phone value={phone} inputRef={phoneRef} />
        </Grid>
        <Grid item xs={6} sm={4} md={4} >
          <Remark value={remark} inputRef={remarkRef} />
        </Grid>
      </Grid>

      {/* Delete button */}
      {
        length !== 1 && <Stack direction={{sm: 'row-reverse'}} sx={{mr: SMALL_MARGIN, mt: SMALL_MARGIN}} spacing={3}>
          <Button variant="outlined" color="secondary" onClick={() => deletePerson(idx)}>{t('delete')}</Button>
        </Stack>
      }
    </Box>
  )
}

export default Person
