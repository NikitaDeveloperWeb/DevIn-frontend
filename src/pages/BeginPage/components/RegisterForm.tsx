//libs
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//components
import Field from '../../../components/Field';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import Stepper from '../../../components/Stepper';
//icons
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import FaceIcon from '@material-ui/icons/Face';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import PersonPinCircleIcon from '@material-ui/icons/PersonPinCircle';
import MailIcon from '@material-ui/icons/Mail';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import ScheduleIcon from '@material-ui/icons/Schedule';
import WorkIcon from '@material-ui/icons/Work';
import WcIcon from '@material-ui/icons/Wc';
import Select from '../../../components/Select';
//chema form
const RegisterFormSchema = yup.object().shape({
  username: yup.string().required('Enter your username').required(),
  password: yup.string().min(6, 'At least six characters').required(),
  firstName: yup.string().min(2, 'At least two characters').required(),
  lastName: yup.string().min(2, 'At least two characters').required(),
  date: yup.string().required(),
  email: yup.string().min(5, 'At least five characters').required(),
  phone: yup.string().required(),
  location: yup.string().required(),
  action: yup.string().required(),
  sex: yup.string().required(),
});

export interface RegisterProps {
  username: string;
  firstName: string;
  lastName: string;
  date: string;
  email: string;
  phone: string;
  location: string;
  action: 'Designer' | 'Developer';
  sex: 'Man' | 'Woman';
  password: string;
}

function RegisterForm() {
  const { register, handleSubmit } = useForm<RegisterProps>({
    resolver: yupResolver(RegisterFormSchema),
  });
  const onSubmit = async (data: RegisterProps) => {
    try {
    } catch (error) {}
  };
  const [activeStep, setActiveStep] = React.useState('stepper__one');

  return (
    <Form
      id="Register__form"
      method="POST"
      functionOnSubmit={handleSubmit(onSubmit)}
      title="Registration"
      className="form__primory">
      <Stepper
        childrenOne={
          <div>
            <Field
              type="text"
              placeholder="Username"
              className="field__primory"
              name="username"
              fieldRef={register}
              icon={<PersonIcon />}
              form="Register__form"
            />
            <Field
              type="text"
              placeholder="First name"
              className="field__primory"
              name="firstname"
              fieldRef={register}
              icon={<FaceIcon />}
              form="Register__form"
            />
            <Field
              type="text"
              placeholder="Last name"
              className="field__primory"
              name="lastname"
              fieldRef={register}
              icon={<SupervisedUserCircleIcon />}
              form="Register__form"
            />
            <Field
              type="text"
              placeholder="Location"
              className="field__primory"
              name="location"
              fieldRef={register}
              icon={<PersonPinCircleIcon />}
              form="Register__form"
            />
            <span onClick={() => setActiveStep('stepper__two')}>
              <Button
                value="Сontinue"
                type="button"
                className="button__primary"
                form="Register__form"
              />
            </span>
          </div>
        }
        childrenTwo={
          <div>
            <Field
              type="email"
              placeholder="Email"
              className="field__primory"
              name="email"
              fieldRef={register}
              icon={<MailIcon />}
              form="Register__form"
            />
            <Field
              type="text"
              placeholder="Phone"
              className="field__primory"
              name="phone"
              fieldRef={register}
              icon={<PhoneAndroidIcon />}
              form="Register__form"
            />
            <Field
              type="date"
              placeholder="Date"
              className="field__primory"
              name="date"
              fieldRef={register}
              icon={<ScheduleIcon />}
              form="Register__form"
            />
            <span onClick={() => setActiveStep('stepper__one')}>
              <Button
                value="Back"
                type="button"
                className="button__primary"
                form="Register__form"
              />
            </span>
            <span onClick={() => setActiveStep('stepper__three')}>
              <Button
                value="Сontinue"
                type="button"
                className="button__primary"
                form="Register__form"
              />
            </span>
          </div>
        }
        childrenThree={
          <div>
            <Select
              name="action"
              placeholder="Your action"
              option={['Designer', 'Developer']}
              icon={<WorkIcon />}
              className="select__primory"
            />
            <Select
              name="sex"
              placeholder="Your action"
              option={['Man', 'Woman']}
              icon={<WcIcon />}
              className="select__primory"
            />
            <Field
              type="password"
              placeholder="Password"
              className="field__primory"
              name="password"
              fieldRef={register}
              icon={<VpnKeyIcon />}
              form="Register__form"
            />
            <Field
              type="password"
              placeholder="Repeat password"
              className="field__primory"
              name="repeat__password"
              fieldRef={register}
              icon={<VpnKeyIcon />}
              form="Register__form"
            />
            <Field
              type="checkbox"
              placeholder="Remember password"
              className="field__primory__remember register_remembr"
              name="remember">
              I agree with the rules and privacy policy.
            </Field>
            <span onClick={() => setActiveStep('stepper__two')}>
              <Button
                value="Back"
                type="button"
                className="button__primary"
                form="Register__form"
              />
            </span>
            <Button
              value="Sign In"
              type="submit"
              className="button__primary"
              form="Register__form"
            />
          </div>
        }
        step={activeStep}
      />
    </Form>
  );
}

export default RegisterForm;
