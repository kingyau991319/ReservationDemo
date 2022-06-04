// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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

const typographyProps = {
  mt : 3,
  mb : 3
};

const PersonInfo = () => {

  const { t } = useTranslation();
  let [ persons, setPersons ] = useState<Person[]>([
    {
      id: 1,
      name: 'hello is my name',
      age: 0,
      email: 'kingyau@yahoo.com.hk',
      phone: '5555',
      remark: 'no remark'
    }
  ]);

  return (
    <>
      <Typography variant="subtitle1" display="block" gutterBottom sx={typographyProps}>
        {t('person_information')}
      </Typography>
      <Box sx={{border: 1 , p: 3, m: 2}}>
        {
          persons.map((person: Person, index: number) => {
            return (
              <Person key={person.id} person={person}/>
            )
          })
        }
      </Box>
      <Stack direction={{sm: 'row-reverse'}} sx={{mr: 3}} spacing={3}>
        <Button variant="outlined">{t('add_new')}</Button>
      </Stack>
  </>
  )
}

export default PersonInfo;