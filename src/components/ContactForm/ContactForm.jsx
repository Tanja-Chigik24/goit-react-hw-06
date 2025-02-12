import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

// 1. Імпортуємо хук
import { useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { addContact } from "../../redux/contactsSlice";

export const ContactForm = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  // 4. Викликаємо фабрику екшену та передаємо дані для payload
  // 5. Відправляємо результат - екшен створення контакту
  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        id: crypto.randomUUID(),
        name: values.username,
        number: values.number,
      })
    );
    actions.resetForm();
  };
  const nameFieldId = useId();
  const numberFieldId = useId();
  const initialValues = {
    username: "",
    number: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="username"
            id={nameFieldId}
            placeholder="Enter contact text..."
          />
          <ErrorMessage
            className={css.error}
            name="username"
            component="span"
          />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={css.field}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
