import styles from "@/styles/AppraisalEntryForm.module.css";
import { ConfirmButton } from "../ComfirmButton/ConfirmButton";

export const PersonalInformationForm = ({
  personalInfo,
  setPersonalInfo,
  setIsAllOK,
}) => {
  const handleOnChange = (e) => {
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, [e.target.name]: e.target.value };
    });
  };

  const handleRadioChange = (e) => {
    setPersonalInfo((prevInfo) => {
      return { ...prevInfo, [e.target.name]: e.target.id === "yes" };
    });
  };

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
        onChange={handleOnChange}
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
        onChange={handleOnChange}
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
        onChange={handleOnChange}
        required
      />
      <label className={styles.label} htmlFor="tel">
        メールアドレス <span className={styles.requiredLabel}>※必須</span>
      </label>
      <input
        className={styles.textbox}
        type="email"
        id="email"
        name="email"
        onChange={handleOnChange}
        required
      />

      <label className={styles.label} htmlFor="radio">
        キャンペーンに申し込みますか？{" "}
        <span className={styles.requiredLabel}>※必須</span>
      </label>
      <div className={styles.radioButton}>
        <input
          type="radio"
          id="yes"
          name="radio"
          onChange={handleRadioChange}
          required
        />
        <label htmlFor="yes">はい、申し込みます。</label>
      </div>
      <div className={styles.radioButton}>
        <input
          type="radio"
          id="no"
          name="radio"
          onChange={handleRadioChange}
          required
        />
        <label htmlFor="no">いいえ、申し込みません。</label>
      </div>
    </>
  );
};
