import styles from '@/styles/AppraisalEntryForm.module.css'
import { findCategory } from '@/utils/findCourses';

export const Lists = ({ handleClick, category }) => {
  const menu = findCategory(category);

  if (!menu || !menu.items) {
    console.error(`Category ${category} not found or has no items.`);
    return null; // エラー処理や何も表示しない場合の処理を追加することも考えられます
  }

  return (
    <ul className={styles.ul}>
      {menu.items.map((item) => (
        <li key={item.value} className={styles.list}>
          <button onClick={handleClick} value={item.value}>{item.name}</button>
        </li>
      ))}
    </ul>
  )
}