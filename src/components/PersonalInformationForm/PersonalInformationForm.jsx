import styles from "@/styles/AppraisalEntryForm.module.css";
import { ConfirmButton } from "../ComfirmButton/ConfirmButton";

export const PersonalInformationForm = () => {
  return (
    <>
      <label className={styles.label} htmlFor="name">
        名前 <span className={styles.requiredLabel}>※必須</span>
      </label>
      <input
        className={styles.textbox}
        type="text"
        id="name"
        name="name"
        required
      />
      <label className={styles.label} htmlFor="postcode">
        郵便番号 <span className={styles.requiredLabel}>※必須</span>
      </label>
      <input
        className={styles.textbox}
        type="number"
        id="postcode"
        name="postcode"
        required
      />
      <label className={styles.label} htmlFor="tel">
        電話番号 <span className={styles.requiredLabel}>※必須</span>
      </label>
      <input
        className={styles.textbox}
        type="tel"
        id="tel"
        name="tel"
        required
      />
      <label className={styles.label} htmlFor="tel">
        メールアドレス <span className={styles.requiredLabel}>※必須</span>
      </label>
      <input
        className={styles.textbox}
        type="mail"
        id="mail"
        name="mail"
        required
      />

      <label className={styles.label} htmlFor="radio">
        キャンペーンに申し込みますか？{" "}
        <span className={styles.requiredLabel}>※必須</span>
      </label>
      <div className={styles.radioButton}>
        <input type="radio" id="yes" name="radio" required />
        <label htmlFor="yes">はい、申し込みます。</label>
      </div>
      <div className={styles.radioButton}>
        <input type="radio" id="no" name="radio" required />
        <label htmlFor="no">いいえ、申し込みません。</label>
      </div>

      <ConfirmButton />
    </>
  );
};
