import styles from '@/styles/AppraisalEntryForm.module.css'

export const SelectedMenu = ({ menuTexts }) => {
  return (
    <>
      <p className={styles.title} >選んだメニュー</p>
      <dl className={styles.selectedMenu} >
        <dd className={styles.selectedMenuTitle}>前菜</dd>
        <dt>{menuTexts.appetizer}</dt>
        <dd className={styles.selectedMenuTitle}>スープ</dd>
        <dt>{menuTexts.soup}</dt>
        <dd className={styles.selectedMenuTitle}>肉料理</dd>
        <dt>{menuTexts.meatDish}</dt>
        <dd className={styles.selectedMenuTitle}>デザート</dd>
        <dt>{menuTexts.dessert}</dt>
      </dl>
    </>
  )
}