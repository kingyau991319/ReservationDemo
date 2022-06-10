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
import Name from './TextInputElement/Name';
import Age from './TextInputElement/Age';
import Email from './TextInputElement/Email';
import Phone from './TextInputElement/Phone';
import Remark from './TextInputElement/Remark';
import Gender from './TextInputElement/Gender';

// Interface
import { PersonData } from './Interface/PersonData';

const Person = 
  (props : {
    person : PersonData,
    idx: number,
    length: number,
    deletePerson: Function,
    changeValue: Function
  }) => {
  const { t } = useTranslation();

  const {
    length,
    idx,
    deletePerson,
    changeValue,
  } = props;

  const { 
    id,
    name,
    age,
    gender,
    email,
    phone,
    remark
  } = props.person;

  const setName = (inputName : string) => {
    changeValue(id, 'name', inputName)
  }

  const setAge = (inputAge : number | null) => {
    changeValue(id, 'age', inputAge)
  }

  const setEmail = (inputEmail : string) => {
    changeValue(id, 'email', inputEmail)
  }

  const setPhone = (inputPhone : string) => {
    changeValue(id, 'phone', inputPhone)
  }

  const setGender = (inputGender : string) => {
    changeValue(id, 'gender', inputGender)
  }

  const setRemark = (inputRemark : string) => {
    changeValue(id, 'remark', inputRemark)
  }

  return (
    <Box sx={{border: 1 , p: MEDIUM_PADDING, m: SMALL_MARGIN}}>

      <Typography variant="subtitle1" display="block" gutterBottom sx={{mb: SMALL_MARGIN}}>
        {t('person_information') + (idx + 1)}
      </Typography>

      <Grid container spacing={{xs: 2}} columns={{ xs: 4, sm: 8}}>

        <Grid item xs={6} sm={4} md={4}>
          <Name value={name} setName={setName} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <Gender value={gender} setGender={setGender} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <Age value={age} setAge={setAge} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <Email value={email} setEmail={setEmail} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <Phone value={phone} setPhone={setPhone} />
        </Grid>
        <Grid item xs={6} sm={4} md={4}>
          <Remark value={remark} setRemark={setRemark} />
        </Grid>

      </Grid>

      {
        length !== 1
          && <Stack direction={{sm: 'row-reverse'}} sx={{mr: SMALL_MARGIN, mt: SMALL_MARGIN}} spacing={3}>
            <Button variant="outlined" color="secondary" onClick={() => deletePerson(idx)}>{t('delete')}</Button>
          </Stack>
      }
    </Box>
  )
}

export default Person
