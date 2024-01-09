import styles from "@/styles/AppraisalEntryForm.module.css";

export const NextButton = ({ inputState }) => {
  const isNotEntered = Object.values(inputState.menu).some(
    (val) => val === "選択してください"
  );

  const nextButtonClick = (e) => {
    e.preventDefault();
    if (isNotEntered) {
      console.log("NG");
    } else {
      console.log("OK");
      // setIsMenuOK(true);
    }
  };

  return (
    <button className={styles.nextButton} onClick={nextButtonClick}>
      次へ
    </button>
  );
};
