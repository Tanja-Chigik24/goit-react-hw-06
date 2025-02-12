import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";

// 1. Імпортуємо хук
import { useSelector } from "react-redux";

const getVisibleContacts = (contacts, nameFilter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );
};

export const ContactList = () => {
  // 2. Отримуємо масив контактів із стану Redux
  const contacts = useSelector((state) => state.contacts.items);
  // 3. Отримуємо значення фільтра із стану Redux
  const nameFilter = useSelector((state) => state.filters.name);
  // 4. Обчислюємо масив контактів, які необхідно відображати в інтерфейсі
  const visibleContacts = getVisibleContacts(contacts, nameFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};
