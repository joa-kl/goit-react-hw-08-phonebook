
// import css from './App.module.css';
// import ContactForm  from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import Home, { HomePage } from 'pages/Home';
import Login, { LoginPage } from 'pages/Login';
import Register, { RegisterPage } from 'pages/Register';

import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
// import { TasksPage } from 'pages/Tasks';
import useAuth from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import Phonebook from 'pages/Phonebook';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const PhonebookPage = lazy(() => import('../pages/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" element={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" element={<Login />} />
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/login" element={<Phonebook />} />
          }
        />
      </Route>
    </Routes>
  );
};

export default App;

    
  // return (
  //     <div>
  //       <Routes>
  //         <Route path="/" element={<Layout/>} > 
  //           <Route index element={<HomePage />} />
  //           <Route path="login" element={<LoginPage />} />
  //           <Route path="register" element={<RegisterForm />} />
  //         </Route>
  //       </Routes>
  //     </div>
  //   );



