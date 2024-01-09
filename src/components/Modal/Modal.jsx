import styles from "@/styles/AppraisalEntryForm.module.css";
import { findCategory } from "@/utils/findCourses";

export const Modal = ({ setInputState, isModal, category, toggleModal }) => {
  if (!isModal) return null; // 早期リターン

  const updateMenu = (category, e) => {
    e.preventDefault();

    const text = e.currentTarget.innerText;
    setInputState((prevMenuState) => ({
      ...prevMenuState,
      menu: {
        ...prevMenuState.menu,
        [category]: text,
      },
    }));
  };

  const menu = findCategory(category);
  if (!menu || !menu.items) return null;

  return (
    <div className={styles.background} onClick={() => toggleModal()}>
      <div className={`${styles.modal}`}>
        <p>{menu.label}を選んでね</p>
        <ul className={styles.ul}>
          {menu.items.map((item) => (
            <li key={item.value} className={styles.list}>
              <button
                onClick={(e) => updateMenu(category, e)}
                value={item.value}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => toggleModal()}>戻る</button>
      </div>
    </div>
  );
};
