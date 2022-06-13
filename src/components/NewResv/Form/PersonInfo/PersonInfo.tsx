// React
import { useState } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Components
import Person from './Person';

// Interface
import { PersonData } from './Interface/PersonData';
import { InputType } from './Interface/InputElementType';

// Icon
import AddIcon from '@mui/icons-material/Add';

// Constants
import { initPersonData, RESV_PERSON_LIMIT } from '../../Constants/initData';
import { SMALL_MARGIN } from '../../Constants/style';

const typographyProps = {
  mt : SMALL_MARGIN,
  mb : SMALL_MARGIN
};

const PersonInfo = (props : {persons : PersonData[], setPersons : Function}) => {
  const { t } = useTranslation();
  const { persons, setPersons } = props;
  const [ personOrder, setpersonOrder ] = useState(1);

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

  const changeValue = (id: number, type: InputType, value: any) => {
    let idx = persons.findIndex((p) => p.id === id);
    if (persons !== undefined) {
      switch (type) {
        case 'name':
          persons[idx].name = value;
          break;
        case 'age':
          persons[idx].age = value;
          break;
        case 'email':
          persons[idx].email = value;
          break;
        case 'phone':
          persons[idx].phone = value;
          break;
        case 'gender':
          persons[idx].gender = value;
          break;
        case 'remark':
          persons[idx].remark = value;
          break;
        default:
          console.error(`type ${type} is not found`);
          throw new TypeError('Persons update type is not valid');
      }
      setPersons([...persons]);
    }
  }

  const personLength = persons.length;

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
              length={personLength}
              changeValue={changeValue}
            />
          )
        })
      }
      {
        personLength <= RESV_PERSON_LIMIT &&
          <Stack direction={{sm: 'row-reverse'}} sx={{mr:  SMALL_MARGIN}} spacing={3}>
            <Button variant="outlined" onClick={addPerson} startIcon={<AddIcon/>}>
              <Typography sx={{lineHeight: 'inherit'}}>
                {t('add_new')}
              </Typography>
            </Button>
          </Stack>
      }
    </>
  )
}

export default PersonInfo;
