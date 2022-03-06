import { Formik, Form } from 'formik';
import { MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

console.log(formJson);

export const DynamicForm = () => {
  return (
    <div>
      <h1>Dynamic Form</h1>
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
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label }) => {
              return (
                <MyTextInput
                  key={name}
                  type={type as any}
                  name={name}
                  label={label}
                  placeholder={placeholder}
                />
              );
            })}

            <button type='button'>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
