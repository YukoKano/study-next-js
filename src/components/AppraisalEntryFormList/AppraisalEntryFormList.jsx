import styles from '@/styles/AppraisalEntryForm.module.css'

export const List = ({ value, text, handleClick }) => {
  return (
    <li className={styles.list}><button onClick={handleClick} value={value}>{text}</button></li>
  )
}