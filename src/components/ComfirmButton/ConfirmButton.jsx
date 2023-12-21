import styles from "@/styles/AppraisalEntryForm.module.css";

export const ConfirmButton = ({ personalInfo, setIsAllOK }) => {
  const notEntered = Object.values(personalInfo).some((val) => val === "");

  const handleClick = (e) => {
    e.preventDefault();
    if (notEntered) {
      console.log("NG");
    } else {
      console.log("OK");
      setIsAllOK(true);
    }
  };

  return (
    // TODO: ここをnextButtonと揃える　ロジックは上に書く、渡す
    <button className={styles.nextButton} onClick={handleClick}>
      確認画面へ進む
    </button>
  );
};
