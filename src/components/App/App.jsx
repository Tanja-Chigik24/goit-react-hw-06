import { ContactForm } from "../ContactForm/ContactForm";
import { ContactList } from "../ContactList/ContactList";
import { SearchBox } from "../SearchBox/SearchBox";
import { Layout } from "../Layout/Layout";

export const App = () => {
  return (
    <Layout>
      <SearchBox />
      <ContactForm />
      <ContactList />
    </Layout>
  );
};
