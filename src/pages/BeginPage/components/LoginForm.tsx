//libs
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
//components
import Field from '../../../components/Field';
import Form from '../../../components/Form';
import Button from '../../../components/Button';
import { Link } from 'react-router-dom';
//icons
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

//chema form
const LoginFormSchema = yup.object().shape({
  username: yup.string().required('Enter your username'),
  password: yup.string().min(6, 'At least six characters').required(),
});

export interface LoginProps {
  username: string;
  password: string;
}

function LoginForm() {
  const { register, handleSubmit } = useForm<LoginProps>({
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = async (data: LoginProps) => {
    try {
    } catch (error) {}
  };
  return (
    <Form
      id="login__form"
      method="POST"
      functionOnSubmit={handleSubmit(onSubmit)}
      title="Login"
      className="form__primory">
      <Field
        type="text"
        placeholder="Username"
        className="field__primory"
        name="username"
        fieldRef={register}
        icon={<PersonIcon />}
        form="login__form"
      />
      <Field
        type="text"
        placeholder="Password"
        className="field__primory"
        name="password"
        fieldRef={register}
        icon={<VpnKeyIcon />}
        form="login__form"
      />
      <Field
        type="checkbox"
        placeholder="Remember password"
        className="field__primory__remember"
        name="remember">
        Remember me?
      </Field>
      <Button value="Sign In" type="submit" className="button__primary" form="login__form" />
      <Link to="/reset">Forgot your password?</Link>
    </Form>
  );
}

export default LoginForm;
