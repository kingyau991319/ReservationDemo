// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Box from '@mui/material/Box';
import { Grid } from "@mui/material"
import { Typography } from '@mui/material';

// Icon
import CloseIcon from '@mui/icons-material/Close';

// Components
import Person from './Person';

interface Person {
  id: number,
  name: string,
  age: number,
  email: string,
  phone: string,
  remark: string
}

const PersonInfo = () => {

  const { t } = useTranslation();
  let [ persons, setPersons ] = useState<Person[]>([
    {
      id: 1,
      name: '',
      age: 0,
      email: '',
      phone: '',
      remark: ''
    }
  ]);

  return (
    <>
      <Typography variant="subtitle1" display="block" gutterBottom sx={{mt : 3, mb : 3}}>
        {t('person_information')}
      </Typography>
      <Grid container>
        <div>PersonInfo</div>
        {/* TODO: border =W= */}
        {
          persons.map((person: Person, index: number) => {
            return (
              <Person/>
            )
        })
      }
    </Grid>
  </>
  )
}

export default PersonInfo;