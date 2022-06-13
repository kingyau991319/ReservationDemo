// React
import { ChangeEvent } from 'react';

// Material ui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import SvgIcon from '@mui/material/SvgIcon';
import FormControl from '@mui/material/FormControl';

// Phone Code SVG
// TODO: add svg and change each Component to be wraped by SVGICON
// import { ReactComponent as HKIcon} from '../../../../../asset/svg/country/hk.svg';
// import { ReactComponent as CNIcon} from '../../../../../asset/svg/country/cn.svg';
// import { ReactComponent as TWIcon} from '../../../../../asset/svg/country/tw.svg';
// import { ReactComponent as MOIcon} from '../../../../../asset/svg/country/mo.svg';

// i18n
import { useTranslation } from 'react-i18next';

// interface
import { PhoneData } from '../Interface/PersonData';

// TODO: should be splited the component to be phoneCode and phoneNumber Input
const Phone = (props : {value:PhoneData, setPhone:Function}) => {
  const { t } = useTranslation();
  const { value, setPhone } = props;

  const changePhone = (type: string, data: string) => {
    switch(type) {
      case 'PhoneCode':
        setPhone({...value, PhoneCode: data});
        break;
      case 'PhoneNumber':
        setPhone({...value, PhoneNumber: data});
        break;
    }
  }

  const changePhoneCode = (event: SelectChangeEvent) => {
    changePhone('PhoneCode', event.target.value ?? '852');
  }

  const changePhoneNumber = (event: ChangeEvent<{ value: string | null }>) => {
    changePhone('PhoneNumber', event.target.value ?? '');
  }

  // <TextField id="name-basic" label={t("phone_number")} variant="filled" onChange={changePhone} defaultValue={''} inputProps={{ maxLength: 30 }} />

  // TODO: add svg
  // TODO: add validation for each phone code
  return (
    <>
      <FormControl>
        <Select
          labelId="form-input-period"
          id="form-input-period"
          defaultValue={'852'}
          displayEmpty
          sx={{
            mr : 1,
          }}    
          onChange={changePhoneCode}
        >
          {/* 'hk' */}
          <MenuItem value='852' > 
            {/* <SvgIcon component={HKIcon} viewBox='0 0 24 24'/> */}
            {'+852'} 
          </MenuItem>
          {/* 'cn' */}
          <MenuItem value='886'>
            {/* <SvgIcon component={CNIcon}/> */}
            {'+886'}
          </MenuItem>
          {/* 'tw' */}
          <MenuItem value='853'>
            {/* <SvgIcon component={TWIcon}/> */}
            {'+853'}
          </MenuItem>
          <MenuItem value='86'>
            {/* <SvgIcon component={MOIcon}/> */}
            {'+86'}
          </MenuItem>
        </Select>
      </FormControl>
      <TextField 
        label={t("phone_number")}
        id="name-basic"
        variant="filled"
        sx={{ width: '150px'}}
        // error={!isValidAge(value)}
        // helperText={!isValidAge(value) ? "Age is too large or too small" : null}
        onChange={changePhoneNumber}
        defaultValue={''}
      />
    </>
  )}

export default Phone;
