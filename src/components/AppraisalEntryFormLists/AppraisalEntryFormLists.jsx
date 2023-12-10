import styles from '@/styles/AppraisalEntryForm.module.css'
import { COURSES } from '@/constants/COURSES';
import { List } from '../AppraisalEntryFormList/AppraisalEntryFormList';

export const Lists = ({ handleClick, type }) => {
  const category = COURSES.find((e) => e.value === type);

  if (!category || !category.items) {
    console.error(`Category ${type} not found or has no items.`);
    return null; // エラー処理や何も表示しない場合の処理を追加することも考えられます
  }

  return (
    <ul className={styles.ul}>
      {category.items.map((item) => (
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