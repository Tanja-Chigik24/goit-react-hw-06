import css from "./Contact.module.css";
import { HiMiniUser, HiPhone } from "react-icons/hi2";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.list}>
      <div className={css.contact}>
        <p className={css.text}>
          <HiMiniUser className="my-icon" size="20" />
          {name}
        </p>
        <p className={css.text}>
          <HiPhone className="my-icon" size="20" />
          {number}
        </p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
