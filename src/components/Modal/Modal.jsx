import styles from "@/styles/AppraisalEntryForm.module.css";
import { findCategoryItems } from "@/utils/findCourses";

export const Modal = ({
  selectedCategory,
  isDisplayModal,
  setIsDisplayModal,
  setInputState,
}) => {
  if (!isDisplayModal) return null; // 早期リターン

  const menu = findCategoryItems(selectedCategory);
  if (!menu || !menu.items) return null;

  const updateMenu = (selectedCategory, e) => {
    e.preventDefault();

    const text = e.currentTarget.innerText;
    setInputState((prevMenuState) => ({
      ...prevMenuState,
      menu: {
        ...prevMenuState.menu,
        [selectedCategory]: text,
      },
    }));
  };

  return (
    <div
      className={styles.background}
      onClick={() => setIsDisplayModal(!isDisplayModal)}
    >
      <div className={`${styles.modal}`}>
        <p>{menu.label}を選んでね</p>
        <ul className={styles.ul}>
          {menu.items.map((item) => (
            <li key={item.value} className={styles.list}>
              <button
                onClick={(e) => updateMenu(selectedCategory, e)}
                value={item.value}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        <button onClick={() => setIsDisplayModal(!isDisplayModal)}>戻る</button>
      </div>
    </div>
  );
};
