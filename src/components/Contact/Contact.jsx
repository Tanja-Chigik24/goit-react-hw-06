import css from "./Contact.module.css";
import { HiMiniUser, HiPhone } from "react-icons/hi2";

// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { deleteContact } from "../../redux/contactsSlice";

export const Contact = ({ contact }) => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор контакту
  // 5. Відправляємо результат - екшен видалення контакту
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.list}>
      <div className={css.contact}>
        <p className={css.text}>
          <HiMiniUser className="my-icon" size="20" />
          {contact.name}
        </p>
        <p className={css.text}>
          <HiPhone className="my-icon" size="20" />
          {contact.number}
        </p>
      </div>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};
