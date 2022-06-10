// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

// The range of age
const MAX_AGE = 130;
const MIN_AGE = 1;
const isValidAge = (age: number|null) => (age!= null && age >= MIN_AGE && age <= MAX_AGE);

const Age = (props: {value:number|null, setAge: Function}) => {
  const { t } = useTranslation();
  const { value, setAge } = props;

  // Check the range of age and update state if valid
  const changeAge = (event: ChangeEvent<{ value: string }>) => {
    // TODO: add validation
    const inputAge = parseInt(event.target.value) ?? 0;
    const isValid = isValidAge(inputAge);

    isValid && setAge(inputAge);
  }
  return <TextField id="name-basic" label={t("age")} variant="filled" error={isValidAge(value)} onChange={changeAge} defaultValue={''} />
}

export default Age;