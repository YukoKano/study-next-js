import styles from "@/styles/AppraisalEntryForm.module.css";

export const RadioButton = (props) => {
  const handleRadioChange = (e) => {
    console.log(e.target.id);
    props.setInputState((prevInfo) => {
      return {
        ...prevInfo,
        personalInfo: {
          ...prevInfo.personalInfo,
          radio: e.target.id === "yes",
        },
      };
    });
  };

  return (
    <div className={styles.radioButton}>
      <input
        type="radio"
        id={props.id}
        name={props.name}
        onChange={handleRadioChange}
        required
      />
      <label htmlFor="yes">{props.text}</label>
    </div>
  );
};
