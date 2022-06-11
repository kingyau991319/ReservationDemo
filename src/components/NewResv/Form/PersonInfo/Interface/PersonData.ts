export interface PersonData {
  id: number,
  name: string,
  age: number | null,
  email: string,
  phone: PhoneData,
  gender: GenderType,
  remark: string
}

export interface PhoneData {
  phoneCode: string,
  phoneNumber: string
}

export type GenderType = 'male' | 'female' | 'other';