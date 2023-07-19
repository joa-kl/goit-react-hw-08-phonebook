
// import css from './App.module.css';
// import ContactForm  from "./ContactForm/ContactForm";
// import { ContactList } from "./ContactList/ContactList";
// import { Filter } from "./Filter/Filter";
// import { TasksPage } from 'pages/Tasks';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute/RestrictedRoute';
import useAuth from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import Phonebook from 'pages/Phonebook/Phonebook';
import css from "./App.module.css"
// import { Box } from '@chakra-ui/react';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const PhonebookPage = lazy(() => import('../pages/Phonebook'));

// 1. Import the extendTheme function
// import { extendTheme, ChakraProvider } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {
//   brand: {
//     900: '#1a365d',
//     800: '#153e75',
//     700: '#2a69ac',
//     600: '#2a09ac',
//     500: '#1a69ac',
//   },
// }

// export const theme = extendTheme({ colors })

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <div className={css.container}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
          }
        />
        <Route
          path="phonebook"
          element={
            <PrivateRoute redirectTo="/login" component={<Phonebook />} />
          }
        />
      </Route>
        </Routes>
      </div>
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



