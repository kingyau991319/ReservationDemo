// React
import { ChangeEvent } from 'react';

// Material ui
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

const Phone = (props : {value:string, setPhone:Function}) => {
  const { t } = useTranslation();
  const { value, setPhone } = props;
  const changePhone = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
    setPhone(event.target.value);
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
          defaultValue={'hk'}
          displayEmpty
          sx={{
            mr : 1,
          }}    
          // onChange={}
        >
          <MenuItem value={'hk'}> 
            {/* <SvgIcon component={HKIcon} viewBox='0 0 24 24'/> */}
            {'+852'} 
          </MenuItem>
          <MenuItem value={'tw'}>
            {/* <SvgIcon component={CNIcon}/> */}
            {'+886'}
          </MenuItem>
          <MenuItem value={'mo'}>
            {/* <SvgIcon component={TWIcon}/> */}
            {'+853'}
          </MenuItem>
          <MenuItem value={'cn'}>
            {/* <SvgIcon component={MOIcon}/> */}
            {'+86'}
          </MenuItem>
        </Select>
      </FormControl>
      <TextField 
        label={t("phone_number")}
        id="name-basic"
        variant="filled"
        // error={!isValidAge(value)}
        // helperText={!isValidAge(value) ? "Age is too large or too small" : null}
        // onChange={}
        defaultValue={''}
      />
    </>
  )}

export default Phone;
