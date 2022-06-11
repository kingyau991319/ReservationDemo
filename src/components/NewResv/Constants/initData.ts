import { PersonData } from "../Form/PersonInfo/Interface/PersonData"

export const initPersonData : PersonData = {
  id: 1,
  name: '',
  age: null,
  gender: 'other',
  email: '',
  phone: {
    phoneCode: '+852',
    phoneNumber: ''
  },
  remark: ''
}

export const RESV_PERSON_LIMIT = 12;