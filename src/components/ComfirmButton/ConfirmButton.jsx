import styles from "@/styles/AppraisalEntryForm.module.css";

export const ConfirmButton = ({}) => {
  // const notEntered = Object.values(menuTexts).some(
  //   (val) => val === "選択してください"
  // ); // ここ分かってない

  const handleClick = (e) => {
    e.preventDefault();
    // if (notEntered) {
    //   console.log("NG");
    // } else {
    //   console.log("OK");
    //   setDisplaySelectedMenu(true);
    // }
  };

  return (
    <button className={styles.nextButton} onClick={handleClick}>
      次へ
    </button>
  );
};
