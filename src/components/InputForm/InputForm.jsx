import styles from "@/styles/AppraisalEntryForm.module.css";
import { RequiredLabel } from "../RequierdLabel/RequiredLabel";

export const InputForm = ({ name, id, type, setInputState }) => {
  const handleOnChange = (e) => {
    setInputState((prevInfo) => {
      return {
        ...prevInfo,
        personalInfo: {
          ...prevInfo.personalInfo,
          [e.target.name]: e.target.value,
        },
      };
    });
  };

  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {name} <RequiredLabel />
      </label>
      <input
        className={styles.textbox}
        type={type}
        id={id}
        name={id}
        onChange={handleOnChange}
        required
      />
    </>
  );
};
