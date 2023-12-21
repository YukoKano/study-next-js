import styles from "@/styles/AppraisalEntryForm.module.css";

export const SelectedMenu = ({ menuTexts }) => {
  return (
    <>
      <p className={styles.title}>選んだメニュー</p>
      <dl className={styles.selectedMenu}>
        {/* menu */}
        <dd className={styles.selectedMenuTitle}>前菜</dd>
        <dt>{menuTexts.appetizer}</dt>
        <dd className={styles.selectedMenuTitle}>スープ</dd>
        <dt>{menuTexts.soup}</dt>
        <dd className={styles.selectedMenuTitle}>肉料理</dd>
        <dt>{menuTexts.meatDish}</dt>
        <dd className={styles.selectedMenuTitle}>デザート</dd>
        <dt>{menuTexts.dessert}</dt>
        {/* Personal Info */}
        <dd className={styles.selectedMenuTitle}>名前</dd>
        <dt>{menuTexts.name}</dt>
        <dd className={styles.selectedMenuTitle}>郵便番号</dd>
        <dt>{menuTexts.postcode}</dt>
        <dd className={styles.selectedMenuTitle}>電話番号</dd>
        <dt>{menuTexts.tel}</dt>
        <dd className={styles.selectedMenuTitle}>メール</dd>
        <dt>{menuTexts.email}</dt>
        <dd className={styles.selectedMenuTitle}>キャンペーン</dd>
        <dt>{menuTexts.radio ? "はい" : "いいえ"}</dt>
      </dl>
    </>
  );
};
