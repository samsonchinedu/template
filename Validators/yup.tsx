import * as yup from 'yup'

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRules: any = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export const Schema = yup.object().shape({
  email: yup.string().matches(emailRules, { message: 'Invalid email' }).required('Required'),

  password: yup.string().min(4).matches(passwordRules, { message: "Please create a stronger password" }).required("Required"),
 
})