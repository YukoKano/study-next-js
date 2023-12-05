import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'

export const AppraisalEntryForm = () => {
  const [displayModal, setDisplayModal] = useState(false);

  const [appetizer, setAppetizer] = useState('選択してください');
  const [soup, setSoup] = useState('選択してください');
  const [meatDish, setMeatDish] = useState('選択してください');
  const [dessert, setDessert] = useState('選択してください');

  const displayClassName = displayModal ? styles.displayBlock : styles.displayNone;


  const toggleDisplayModal = () => { //handleHogeとかの方がいいけど一旦
    setDisplayModal(!displayModal);
  }

  const toggleDisplayModalButtton = (e) => {
    e.preventDefault();
    setDisplayModal(!displayModal);
  }

  const handleAppetizer = (e) => {
    e.preventDefault()
    setAppetizer(e.currentTarget.value)
    toggleDisplayModal();
  }

  const handleSoup = (e) => {
    e.preventDefault()
    setSoup(e.currentTarget.value)
    toggleDisplayModal();
  }

  const handleMeatDish = (e) => {
    e.preventDefault()
    setMeatDish(e.currentTarget.value)
    toggleDisplayModal();
  }

  const handleDessert = (e) => {
    e.preventDefault()
    setDessert(e.currentTarget.value)
    toggleDisplayModal();
  }

  return (
    <form>

      <label className={styles.label}>前菜</label>
      <p className={styles.selectbox} onClick={toggleDisplayModal}>{appetizer}</p>
      {/* displayModalを共通にしているからよくない */}
      <div className={`${styles.modal} ${displayClassName}`}>
        <p>前菜を選んでね</p>
        <ul className={styles.ul}>
          <li className={styles.list}><button onClick={handleAppetizer} value='カレー'>カレー</button></li>
          <li className={styles.list}><button onClick={handleAppetizer} value='シチュー'>シチュー</button></li>
          <li className={styles.list}><button onClick={handleAppetizer} value='グラタン'>グラタン</button></li>
        </ul>
        <button onClick={toggleDisplayModalButtton}>戻る</button>
      </div>

      <label className={styles.label}>スープ</label>
      <p className={styles.selectbox} onClick={toggleDisplayModal}>{soup}</p>
      <div className={`${styles.modal} ${displayClassName}`}>
        <p>スープを選んでね</p>
        <ul className={styles.ul}>
          <li className={styles.list}><button onClick={handleSoup} value='カレー'>カレー</button></li>
          <li className={styles.list}><button onClick={handleSoup} value='シチュー'>シチュー</button></li>
          <li className={styles.list}><button onClick={handleSoup} value='グラタン'>グラタン</button></li>
        </ul>
        <button onClick={toggleDisplayModalButtton}>戻る</button>
      </div>

      <label className={styles.label}>肉料理</label>
      <p className={styles.selectbox} onClick={toggleDisplayModal}>{meatDish}</p>
      <div className={`${styles.modal} ${displayClassName}`}>
        <p>肉料理を選んでね</p>
        <ul className={styles.ul}>
          <li className={styles.list}><button onClick={handleMeatDish} value='カレー'>カレー</button></li>
          <li className={styles.list}><button onClick={handleMeatDish} value='シチュー'>シチュー</button></li>
          <li className={styles.list}><button onClick={handleMeatDish} value='グラタン'>グラタン</button></li>
        </ul>
        <button onClick={toggleDisplayModalButtton}>戻る</button>
      </div>

      <label className={styles.label}>デザート</label>
      <p className={styles.selectbox} onClick={toggleDisplayModal}>{dessert}</p>
      <div className={`${styles.modal} ${displayClassName}`}>
        <p>デザートを選んでね</p>
        <ul className={styles.ul}>
          <li className={styles.list}><button onClick={handleDessert} value='カレー'>カレー</button></li>
          <li className={styles.list}><button onClick={handleDessert} value='シチュー'>シチュー</button></li>
          <li className={styles.list}><button onClick={handleDessert} value='グラタン'>グラタン</button></li>
        </ul>
        <button onClick={toggleDisplayModalButtton}>戻る</button>
      </div>

      <div className={`${styles.background} ${displayClassName}`} onClick={toggleDisplayModal}></div>

      <button className={styles.nextButton} onClick={(e) => { e.preventDefault() }}>次へ</button>
    </form>
  )
}