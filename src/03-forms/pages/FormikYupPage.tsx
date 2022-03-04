import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {
  const { handleChange, values, handleSubmit, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .max(15, 'Debe tener 15 caracteres o menos')
          .required('Requerido'),
        lastName: Yup.string()
          .max(10, 'Debe tener 10 caracteres o menos')
          .required('Requerido'),
        email: Yup.string()
          .email('Direccion de email no valida')
          .required('Requerido'),
      }),
    });

  return (
    <div>
      <h1>Formik Yup</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          name='firstName'
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.firstName && errors.firstName && (
          <span>{errors.firstName}</span>
        )}

        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          name='lastName'
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
