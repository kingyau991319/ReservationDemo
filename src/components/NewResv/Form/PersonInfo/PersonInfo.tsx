// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Icon
import CloseIcon from '@mui/icons-material/Close';

// Constants
import { SMALL_MARGIN } from '../../Constants/style';

// Components
import Person from './Person';

// interface
import { PersonData } from './Interface/PersonData';

const typographyProps = {
  mt : SMALL_MARGIN,
  mb : SMALL_MARGIN
};

const initPersonData : PersonData = {
  id: 1,
  name: '',
  age: 0,
  email: '',
  phone: '',
  remark: ''
}

const PersonInfo = () => {
  const { t } = useTranslation();
  let [ persons, setPersons ] = useState<PersonData[]>([initPersonData]);
  let [ personOrder, setpersonOrder ] = useState(1);

  // Add person by clicking the add new button
  const addPerson = () => {
    setPersons([...persons, {
      ...initPersonData,
      id: personOrder + 1,
    }]);
    setpersonOrder(personOrder + 1);
  }

  const deletePerson = (idx : number) => {
    setPersons(
      persons.filter((person, i) => i !== (idx))
    );
  }

  return (
    <>
      <Typography variant="subtitle1" display="block" gutterBottom sx={typographyProps}>
        {t('person_information')}
      </Typography>
      {
        persons.map((person: PersonData, index: number) => {
          return (
            <Person 
              key={person.id}
              person={person}
              idx={index}
              deletePerson={deletePerson}
              length={persons.length}
            />
          )
        })
      }
      <Stack direction={{sm: 'row-reverse'}} sx={{mr: 3}} spacing={3}>
        <Button variant="outlined" onClick={addPerson}>{t('add_new')}</Button>
      </Stack>
    </>
  )
}

export default PersonInfo;
