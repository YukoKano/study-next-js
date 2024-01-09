import styles from "@/styles/AppraisalEntryForm.module.css";

export const Button = ({ inputState, setIsMenuOK, setIsAllOK }) => {
  const notMenuEntered = Object.values(inputState.menu).some(
    (val) => val === "選択してください"
  );

  const notPersonalInfoEntered = Object.values(inputState.personalInfo).some(
    (val) => val === ""
  );

  const isComfirmOK = !notMenuEntered && !notPersonalInfoEntered;

  const handleClick = (e) => {
    e.preventDefault();
    if (!notMenuEntered) {
      setIsMenuOK(true);
    }
    if (isComfirmOK) {
      setIsAllOK(true);
    }
  };

  return (
    <button className={styles.nextButton} onClick={handleClick}>
      次へ進む
    </button>
  );
};
