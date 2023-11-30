import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'

export const AppraisalEntryForm = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [menuItem, setMenuItem] = useState('選択してください');

  const displayClassName = displayModal ? styles.displayBlock : styles.displayNone;


  const toggleDisplayModal = () => { //handleHogeとかの方がいいけど一旦
    setDisplayModal(!displayModal);
  }

  const setMenuName = (e) => {
    e.preventDefault()
    setMenuItem(e.currentTarget.value)
    toggleDisplayModal();
  }

  return (
    <form>
      <label>メニュー名</label>
      <p className={styles.selectbox} onClick={toggleDisplayModal}>{ menuItem }</p>

      <div className={`${styles.modal} ${displayClassName}`}>
        <p>メニューを選んでね</p>
        <div>
          <button onClick={setMenuName} value='カレー'>カレー</button>
          <button onClick={setMenuName} value='シチュー'>シチュー</button>
          <button onClick={setMenuName} value='グラタン'>グラタン</button>
        </div>
      </div>
      <div className={`${styles.background} ${displayClassName}`} onClick={toggleDisplayModal}></div>

      <button className={styles.nextButton} onClick={(e) => { e.preventDefault() }}>次へ</button>
    </form>
  )
}