import styles from '@/styles/AppraisalEntryForm.module.css'
import { COURSES } from '@/constants/COURSES';
import { List } from '../AppraisalEntryFormList/AppraisalEntryFormList';

export const Lists = ({ handleClick, category }) => {
  const menu = COURSES.find((val) => val.course === category);

  if (!menu || !menu.items) {
    console.error(`Category ${category} not found or has no items.`);
    return null; // エラー処理や何も表示しない場合の処理を追加することも考えられます
  }

  return (
    <ul className={styles.ul}>
      {menu.items.map((item) => (
        <List
          key={item.value}
          value={item.value}
          text={item.name}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}