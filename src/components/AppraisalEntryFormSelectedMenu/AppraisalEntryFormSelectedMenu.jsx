import styles from '@/styles/AppraisalEntryForm.module.css'

export const SelectedMenu = ({ menu }) => {
  return (
    <dl className={styles.selectedMenu} >
      <dd className={styles.selectedMenuTitle}>前菜</dd>
      <dt>{menu.appetizer}</dt>
      <dd className={styles.selectedMenuTitle}>スープ</dd>
      <dt>{menu.soup}</dt>
      <dd className={styles.selectedMenuTitle}>肉料理</dd>
      <dt>{menu.meatDish}</dt>
      <dd className={styles.selectedMenuTitle}>デザート</dd>
      <dt>{menu.dessert}</dt>
    </dl>
  )
}