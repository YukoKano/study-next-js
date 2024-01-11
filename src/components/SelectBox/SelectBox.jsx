import styles from "@/styles/AppraisalEntryForm.module.css";
import { RequiredLabel } from "../RequierdLabel/RequiredLabel";

export const SelectBox = ({
  course,
  inputState,
  isDisplayModal,
  setIsDisplayModal,
  setSelectedCategory,
}) => {
  const handleModal = (e) => {
    e.preventDefault();
    setSelectedCategory(course.course);
    setIsDisplayModal(!isDisplayModal);
  };

  const text = inputState.menu[course.course];

  return (
    <>
      <label className={styles.label}>
        {course.label}
        <RequiredLabel /> 
        {/* TODO:選択してください、だったら必須、そうでなければOK */}
      </label>
      <button className={styles.selectbox} onClick={(e) => handleModal(e)}>
        {text}
      </button>

      {/* TODO:ボタン押したら出るようにする */}
      {/* {text === "選択してください" && (
        <p className={styles.requiredText}>{menu.label}を入力してください</p>
      )} */}
    </>
  );
};
