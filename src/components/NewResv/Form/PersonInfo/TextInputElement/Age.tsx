// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

// The range of age
const MAX_AGE = 130;
const MIN_AGE = 1;
const isValidAge = (age: number|null|string) => (age === null || age === '' || (age >= MIN_AGE && age <= MAX_AGE));

// TODO: change Age to be selected
const Age = (props: {value:number|null, setAge: Function}) => {
  const { t } = useTranslation();
  const { value, setAge } = props;

  // Check the range of age and update state if valid
  const changeAge = (event: ChangeEvent<{ value: string }>) => {
    let inputAge = event.target.value;
    if (parseInt(inputAge) < 1) {
      inputAge = '0';
    }
    setAge(inputAge);
  }

  return (
    <TextField 
      id="name-basic"
      label={t("age")}
      type="number"
      variant="filled"
      error={!isValidAge(value)}
      helperText={!isValidAge(value) ? "Age is too large or too small" : null}
      onChange={changeAge}
      defaultValue={''}
    />
  )
}

export default Age;