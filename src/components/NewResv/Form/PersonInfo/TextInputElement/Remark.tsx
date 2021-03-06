// React
import { ChangeEvent } from 'react';

// TextField
import TextField from '@mui/material/TextField';

// i18n
import { useTranslation } from 'react-i18next';

const Remark = (props: {value:string, setRemark:Function}) => {
  const { t } = useTranslation();
  const { setRemark } = props;
  const changeRemark = (event: ChangeEvent<{ value: string | null }>) => {
    // TODO:
    setRemark(event.target.value);
  }
  return (
    <TextField 
      id="name-basic"
      label={t("remark")}
      variant="filled"
      onChange={changeRemark}
      defaultValue={''}
      sx={{ width: '240px'}}
      inputProps={{ maxLength: 300 }}
    />
  )
}

export default Remark;
