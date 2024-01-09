import styles from "@/styles/AppraisalEntryForm.module.css";

export const SelectedMenu = ({ inputState, isOK }) => {
  if (!isOK.menu || !isOK.personalInfo) return null;

  return (
    <>
      <p className={styles.title}>選んだメニュー</p>
      <dl className={styles.selectedMenu}>
        {/* menu */}
        <dd className={styles.selectedMenuTitle}>前菜</dd>
        <dt>{inputState.menu.appetizer}</dt>
        <dd className={styles.selectedMenuTitle}>スープ</dd>
        <dt>{inputState.menu.soup}</dt>
        <dd className={styles.selectedMenuTitle}>肉料理</dd>
        <dt>{inputState.menu.meatDish}</dt>
        <dd className={styles.selectedMenuTitle}>デザート</dd>
        <dt>{inputState.menu.dessert}</dt>
        {/* Personal Info */}
        <dd className={styles.selectedMenuTitle}>名前</dd>
        <dt>{inputState.personalInfo.name}</dt>
        <dd className={styles.selectedMenuTitle}>郵便番号</dd>
        <dt>{inputState.personalInfo.postcode}</dt>
        <dd className={styles.selectedMenuTitle}>電話番号</dd>
        <dt>{inputState.personalInfo.tel}</dt>
        <dd className={styles.selectedMenuTitle}>メール</dd>
        <dt>{inputState.personalInfo.email}</dt>
        <dd className={styles.selectedMenuTitle}>キャンペーン</dd>
        <dt>{inputState.personalInfo.radio ? "はい" : "いいえ"}</dt>
      </dl>
    </>
  );
};
