import styles from '@/styles/AppraisalEntryForm.module.css'
import { COURSES } from "@/constants/COURSES";
import { findCategory } from '@/utils/findCourses';

export const Label = ({ text, toggleModal, category }) => {
  const menu = findCategory(category);

  const handleModal = (e) => {
    e.preventDefault();
    toggleModal(menu.course)
  }

  return (
    <>
      <label className={styles.label}>{menu.label}</label>
      <button className={styles.selectbox} onClick={(e) => handleModal(e)}>{text}</button>
    </>
  )
}