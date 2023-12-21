import styles from "@/styles/AppraisalEntryForm.module.css";
import { Lists } from "../Lists/Lists";
import { findCategory } from "@/utils/findCourses";

export const Modal = ({ isModal, handleClick, toggleModal, category }) => {
  if(!isModal) return null; // 可読性も上がるし、余計な計算しなくて済む　早期リターン

  const menu = findCategory(category);

  return (
    <>
      <div className={`${styles.modal}`}>
        <p>{menu.label}を選んでね</p>
        <Lists handleClick={handleClick} category={category} />
        <button onClick={() => toggleModal(category)}>戻る</button>
      </div>
      // TODO: ここに背景いるといい こいつが出るようにz-indexあたりを調整
      <div className={styles.background} onClick={hideBackground}></div>
    </>
  );
};
