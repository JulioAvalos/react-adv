import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: '',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
          .min(2, 'El nombre debe ser de 3 caracteres o mas')
          .max(15, 'El nombre debe ser menor de 15 caracteres')
            .required('Requerido'),
          email: Yup.string()
            .email('Revise el formato del correo')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'Minimo 6 letras')
            .required('Requerido'),
          password2: Yup.string()
            .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
            .required('Requerido'),
        })}
      >
        {({handleReset}) => (
          <Form>
            <MyTextInput
              label='Name'
              name='name'
              placeholder='Ingrese su nombre'
            />

            <MyTextInput
              label='Email'
              name='email'
              placeholder='Ingrese su correo'
              type='email'
            />
            
            <MyTextInput
              label='Contraseña'
              name='password1'
              type="password"
              placeholder='Ingrese su contraseña'
            />

            <MyTextInput
              label='Repita su contraseña'
              name='password2'
              type="password"
              placeholder='Ingrese su contraseña nuevamente'
            />

            <button type='submit'>Crear</button>
            <button type='button' onClick={handleReset}>
              Limpiar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
