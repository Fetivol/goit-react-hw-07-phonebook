import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { selectError } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      {error && <p>{error}</p>}
      <h1>Phonebook</h1>
      <Phonebook></Phonebook>
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
