import styles from "@/styles/AppraisalEntryForm.module.css";
import { RequiredLabel } from "../RequierdLabel/RequiredLabel";
import { RadioButton } from "../RadioButton/RadioButton";

export const RadioForm = ({ name, setInputState }) => {
  return (
    <>
      <label className={styles.label} htmlFor={name}>
        キャンペーンに申し込みますか？ <RequiredLabel />
      </label>
      <RadioButton
        id="yes"
        name={name}
        setInputState={setInputState}
        text="はい、申し込みます。"
      />
      <RadioButton
        id="no"
        name={name}
        setInputState={setInputState}
        text="いいえ、申し込みません。"
      />
    </>
  );
};
