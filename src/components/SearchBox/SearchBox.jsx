import css from "./SearchBox.module.css";

// 1. Імпортуємо хук
import { useSelector, useDispatch } from "react-redux";
// 2. Імпортуємо фабрику екшену
import { changeFilter } from "../../redux/filtersSlice";

export const SearchBox = () => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  // 4. Викликаємо фабрику екшену та передаємо значення фільтра
  // 5. Відправляємо результат - екшен зміни фільтра

  const handleFilterChange = (filter) => dispatch(changeFilter(filter));

  return (
    <div className={css.box}>
      <label className={css.label}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        onChange={(e) => handleFilterChange(e.target.value)}
      />
    </div>
  );
};
