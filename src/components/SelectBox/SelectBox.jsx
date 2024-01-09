import styles from "@/styles/AppraisalEntryForm.module.css";
import { findCategory } from "@/utils/findCourses";

export const SelectBox = ({
  text,
  toggleModal,
  category,
  setSelectedCategory,
}) => {
  const menu = findCategory(category);
  console.log(menu);

  const handleModal = (e) => {
    e.preventDefault();
    setSelectedCategory(category);
    toggleModal();
  };

  return (
    <>
      <label className={styles.label}>
        {menu.label}
        <span className={styles.requiredLabel}>※必須</span>
      </label>
      <button className={styles.selectbox} onClick={(e) => handleModal(e)}>
        {text}
      </button>

      {/* TODO:ボタン押したら出るようにする */}
      {text === "選択してください" && (
        <p className={styles.requiredText}>{menu.label}を入力してください</p>
      )}
    </>
  );
};
