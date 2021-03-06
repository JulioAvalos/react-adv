import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';

import {
  FormikBasicPage,
  FormikYupPage,
  FormikComponents,
  FormikAbstraction,
  RegisterPage,
  RegisterFormikPage,
  DynamicForm,
} from '../03-forms/pages';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt='React Logo' />
          <ul>
            <li>
              <NavLink
                to='/register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-basic'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Basic
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-yup'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Yup
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-components'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-abstraction'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/formik-register'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Register Formik
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/dynamic-form'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Dynamic Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'
                className={({ isActive }) => (isActive ? 'nav-active' : '')}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='register' element={<RegisterPage />} />
          <Route path='formik-basic' element={<FormikBasicPage />} />
          <Route path='formik-yup' element={<FormikYupPage />} />
          <Route path='formik-components' element={<FormikComponents />} />
          <Route path='formik-abstraction' element={<FormikAbstraction />} />
          <Route path='formik-register' element={<RegisterFormikPage />} />
          <Route path='dynamic-form' element={<DynamicForm />} />
          <Route path='about' element={<h1>About Page</h1>} />
          <Route path='users' element={<h1>Users Page</h1>} />
          <Route path='/' element={<RegisterPage />} />

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
