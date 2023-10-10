import { Phonebook } from './Phonebook/Phonebook';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <h1>Phonebook</h1>
      <Phonebook></Phonebook>
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Layout>
  );
};
