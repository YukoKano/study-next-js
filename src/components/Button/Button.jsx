import styles from "@/styles/AppraisalEntryForm.module.css";

export const Button = ({ inputState, setIsOK }) => {
  const notMenuEntered = Object.values(inputState.menu).some(
    (val) => val === "選択してください"
  );

  const notPersonalInfoEntered = Object.values(inputState.personalInfo).some(
    (val) => val === ""
  );

  const handleClick = (e) => {
    e.preventDefault();
    if (!notMenuEntered) {
      setIsOK((prevState) => ({ ...prevState, ["menu"]: true }));
    }
    if (!notMenuEntered && !notPersonalInfoEntered) {
      setIsOK((prevState) => ({ ...prevState, ["personalInfo"]: true }));
    }
  };

  return (
    <button className={styles.nextButton} onClick={handleClick}>
      次へ進む
    </button>
  );
};
