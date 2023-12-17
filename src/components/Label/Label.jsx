import styles from "@/styles/AppraisalEntryForm.module.css";
import { findCategory } from "@/utils/findCourses";

export const Label = ({ text, toggleModal, category }) => {
  const menu = findCategory(category);

  const handleModal = (e) => {
    e.preventDefault();
    toggleModal(menu.course);
  };

  return (
    <>
      <label className={styles.label}>
        {menu.label} <span className={styles.requiredLabel}>※必須</span>
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
