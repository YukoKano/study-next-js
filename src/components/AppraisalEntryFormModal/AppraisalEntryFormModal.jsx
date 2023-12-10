import styles from '@/styles/AppraisalEntryForm.module.css'
import { Lists } from '../AppraisalEntryFormLists/AppraisalEntryFormLists';
import { findCategory } from '@/utils/findCourses';

export const Modal = ({ isModal, handleClick, toggleModal, category }) => {
  const menu = findCategory(category);

  return (
    isModal && (
      <div className={`${styles.modal}`}>
        <p>{menu.label}を選んでね</p>
        <Lists handleClick={handleClick} category={category} />
        <button onClick={() => toggleModal(category)}>戻る</button>
      </div>
    )
  )
}