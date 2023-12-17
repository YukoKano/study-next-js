import styles from "@/styles/AppraisalEntryForm.module.css";

export const NextButton = ({ menuTexts, setIsMenuOK }) => {
  const notEntered = Object.values(menuTexts).some(
    (val) => val === "選択してください"
  ); // ここ分かってない

  const nextButtonClick = (e) => {
    e.preventDefault();
    if (notEntered) {
      console.log("NG");
    } else {
      console.log("OK");
      setIsMenuOK(true);
    }
  };

  return (
    <button className={styles.nextButton} onClick={nextButtonClick}>
      次へ
    </button>
  );
};
