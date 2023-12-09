import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'

 const appetizerItems = [{ label: "前菜" }, { label: "スープ" }, { label: "肉料理" }, { label: "デザート" }];

const AppetizerSelectBox = ({ value, handleClick, modal, toggleDisplayModal}) => {
  return (
    <>
      <label className={styles.label}>{appetizerItems[0].label}</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal("appetizer")}>{value}</p>
      {modal && (
        <div className={`${styles.modal}`}>
          <p>{appetizerItems[0].label}を選んでね</p>
          <ul className={styles.ul}>
            <li className={styles.list}><button onClick={handleClick} value='salmonCarappcio'>サーモンのカルパッチョ</button></li>
            <li className={styles.list}><button onClick={handleClick} value='mustardMarinatedMushrooms'>きのこのマスタードマリネ</button></li>
            <li className={styles.list}><button onClick={handleClick} value='cheeseAndAvocadoPinchos'>チーズとアボカドのピンチョス</button></li>
          </ul>
          <button onClick={() => toggleDisplayModal("appetizer")}>戻る</button>
        </div>
      )}
    </>
  )
}

export const AppraisalEntryForm = () => {
  const [displayBackground, setDisplayBackground] = useState(false);

  const [appetizerModal, setAppetizerModal] = useState(false);
  const [soupModal, setSoupModal] = useState(false);
  const [meatDishModal, setMeatDishModal] = useState(false);
  const [dessertModal, setDessertModal] = useState(false);

  const [appetizer, setAppetizer] = useState('選択してください');
  const [soup, setSoup] = useState('選択してください');
  const [meatDish, setMeatDish] = useState('選択してください');
  const [dessert, setDessert] = useState('選択してください');

  const toggleDisplayModal = (value) => { //handleHogeとかの方がいいけど一旦

    setDisplayBackground(!displayBackground);

    if (value === "appetizer") {
      setAppetizerModal(!appetizerModal);
    } else if (value === "soup") {
      setSoupModal(!soupModal);
    } else if (value === "meatDish") {
      setMeatDishModal(!meatDishModal);
    } else if (value === "dessert") {
      setDessertModal(!dessertModal);
    }
  }

  const handleAppetizer = (e) => {
    e.preventDefault()
    setAppetizer(e.currentTarget.innerText)
    toggleDisplayModal("appetizer");
  }

  const handleSoup = (e) => {
    e.preventDefault()
    setSoup(e.currentTarget.innerText);
    toggleDisplayModal("soup");
  }

  const handleMeatDish = (e) => {
    e.preventDefault()
    setMeatDish(e.currentTarget.innerText)
    toggleDisplayModal("meatDish");
  }

  const handleDessert = (e) => {
    e.preventDefault()
    setDessert(e.currentTarget.innerText)
    toggleDisplayModal("dessert");
  }

  const handleBackground = () => {
    setDisplayBackground(false);
    setAppetizerModal(false);
    setSoupModal(false);
    setMeatDishModal(false);
    setDessertModal(false);
  }

  const nextButtonClick = (e) => {
    e.preventDefault();

    if (appetizer === "選択してください" ||  soup === "選択してください" || meatDish === "選択してください" || dessert === "選択してください") {
      console.log("NG");
    } else {
      console.log("OK");
      console.log(appetizer, soup, meatDish, dessert);
    }
  }

  return (
    <form>
      <AppetizerSelectBox value={appetizer} handleClick={handleAppetizer} modal={appetizerModal} toggleDisplayModal={toggleDisplayModal} />

      <label className={styles.label}>スープ</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal("soup")}>{soup}</p>
      {soupModal && (
        <div className={`${styles.modal}`}>
          <p>スープを選んでね</p>
          <ul className={styles.ul}>
            <li className={styles.list}><button onClick={handleSoup} value='cornSoup'>コーンスープ</button></li>
            <li className={styles.list}><button onClick={handleSoup} value='freshOnionPotageSoup'>新玉ねぎのポタージュスープ</button></li>
            <li className={styles.list}><button onClick={handleSoup} value='coldPotatoSoup'>じゃがいもの冷製スープ</button></li>
          </ul>
          <button onClick={() => toggleDisplayModal("soup")}>戻る</button>
        </div>
      )}

      <label className={styles.label}>肉料理</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal("meatDish")}>{meatDish}</p>
      {meatDishModal && (
        <div className={`${styles.modal}`}>
          <p>肉料理を選んでね</p>
          <ul className={styles.ul}>
            <li className={styles.list}><button onClick={handleMeatDish} value='filletSteak'>ヒレステーキ</button></li>
            <li className={styles.list}><button onClick={handleMeatDish} value='chickenSauteWithCheeseCreamSauce'>チキンソテーのチーズクリームソース</button></li>
            <li className={styles.list}><button onClick={handleMeatDish} value='bone-inPorkChopSteak'>骨付きポークチョップステーキ</button></li>
          </ul>
          <button onClick={() => toggleDisplayModal("meatDish")}>戻る</button>
        </div>
      )}

      <label className={styles.label}>デザート</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal("dessert")}>{dessert}</p>
      {dessertModal && (
        <div className={`${styles.modal}`}>
          <p>デザートを選んでね</p>
          <ul className={styles.ul}>
            <li className={styles.list}><button onClick={handleDessert} value='cremeBrulee'>クレームブリュレ</button></li>
            <li className={styles.list}><button onClick={handleDessert} value='orangeSherbet'>オレンジシャーベット</button></li>
            <li className={styles.list}><button onClick={handleDessert} value='fondantAuChocolat'>フォンダン・オ・ショコラ</button></li>
          </ul>
          <button onClick={() => toggleDisplayModal("dessert")}>戻る</button>
        </div>
      )}

      {displayBackground && (
        <div className={`${styles.background}`} onClick={handleBackground}></div>
      )}

      <button className={styles.nextButton} onClick={nextButtonClick}>次へ</button>
    </form>
  )
}