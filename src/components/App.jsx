import { HomePage } from 'pages/HomePage';
import css from './App.module.css';
import ContactForm  from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { LoginPage } from 'pages/LoginPage';
import { RegisterForm } from 'pages/RegisterForm';

  const App = () => {

  return (
      <div>
        <Routes>
          <Route path="/" element={<Layout/>} > 
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterForm />} />
           
          </Route>
        </Routes>
      </div>
    );
};

export default App;
