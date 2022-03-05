import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput, MySelect, MyCheckbox } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(10, 'Debe tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('Direccion de email no valida')
            .required('Requerido'),
          terms: Yup.boolean().oneOf([true], 'Debe de aceptar las condiciones.'),
          jobType: Yup.string().notOneOf(['it-jr'], 'Esta opcion no es permitida').required('Requerido')
        })}
      >
        {(formik) => (
          <Form>
            <MyTextInput 
              label='First Name' 
              name="firstName" 
              placeholder='Ingrese su nombre'
            />
            
            <MyTextInput 
              label='Last Name' 
              name="lastName" 
              placeholder='Ingrese su apellido'
            />

            <MyTextInput 
              label='Email' 
              name="email" 
              placeholder='Ingrese su correo'
              type="email"
            />

            <MySelect label='Job Type' name="jobType" as="select">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr" >IT Jr.</option>
            </MySelect>

            <MyCheckbox label='Terms and conditions' name='terms' />

            <button type='submit'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
