// React
import { ChangeEvent } from 'react';

// Material ui
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

// i18n
import { useTranslation } from 'react-i18next';

// constant
import { COLUMN_INPUT_MIDWIDTH } from '../../../Constants/style';

// interface
import { GenderType } from '../Interface/PersonData';

const Gender = (props : {value:GenderType, setGender:Function}) => {
  const { t } = useTranslation();
  const { value, setGender } = props;

  const changeGender = (event: SelectChangeEvent) => {
    setGender(event.target.value);
  }

  return (
    <FormControl variant="filled" sx={{ minWidth: COLUMN_INPUT_MIDWIDTH }}>
      <InputLabel id="form-input-gender"> {t("gender")} </InputLabel>
      <Select
        onChange={changeGender}
        label={t("gender")}
        defaultValue={'other'}
      >
        <MenuItem value='male'> {t('male')} </MenuItem>
        <MenuItem value='female'> {t('female')} </MenuItem>
        <MenuItem value='other'> {t('other')} </MenuItem>
      </Select>
    </FormControl>
  )
}

export default Gender;
