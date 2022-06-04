// React
import { useState, useRef, useEffect } from 'react';

// i18n
import { useTranslation } from 'react-i18next';

// Material ui
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

// Constants
import { SMALL_PADDING, TINY_MARGIN,  NEW_RESV_MIDWIDTH } from '../../Constants/style';

// Material Ui
import Name from './Name/name';
import Age from './Age/age';
import Email from './Email/email';
import Phone from './Phone/phone';
import Remark from './Remark/remark';

const FormStyle = {
  width: '100%',
  minWidth: NEW_RESV_MIDWIDTH,
  p : SMALL_PADDING,
  mt : TINY_MARGIN,
  ml : TINY_MARGIN,
  mr : TINY_MARGIN,
  border: 3,
  borderColor: 'grey.100',
  borderRadius: 2
};


const Person = (props) => {

  const { t } = useTranslation();

  const { 
    name,
    age,
    email,
    phone,
    remark
  } = props.person;

  const nameRef   = useRef(name);
  const ageRef    = useRef(age);
  const emailRef  = useRef(email);
  const phoneRef  = useRef(phone);
  const remarkRef = useRef(remark);

  const showRefContent = () => {
    console.log(nameRef.current.value ?? '');
  };

  return (
    <Grid container spacing={{xs: 2}} columns={{ xs: 4, sm: 8}}>
      <Grid item xs={6} sm={4} md={4} >
        <Name value={name} inputRef={nameRef} />
      </Grid>
      <Grid item xs={6} sm={4} md={4} >
        <Age value={age} inputRef={ageRef} />
      </Grid>
      <Grid item xs={6} sm={4} md={4} >
        <Email value={email} inputRef={emailRef} />
      </Grid>
      <Grid item xs={6} sm={4} md={4} >
        <Phone value={phone} inputRef={phoneRef} />
      </Grid>
      <Grid item xs={6} sm={4} md={4} >
        <Remark value={remark} inputRef={remarkRef} />
      </Grid>
    </Grid>
  )
}

export default Person
