import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'

const menu = [
  {
    value: 'curyy',
    name: 'カレー'
  },
  {
    value: 'stew',
    name: 'シチュー'
  }
]
const ingredients = [
  {
    makerName: 'curry', // まだ使ってない
    value: 'onion',
    name: '玉ねぎ'
  },
  {
    makerName: 'curry',
    value: 'carrot',
    name: 'にんじん'
  }
]

const years = [
  {
    value: '2022',
    name: '2022'
  },
  {
    value: '2023',
    name: '2023'
  },
]

const elapsedTimes = [
  {
    value: '5',
    name: '5分'
  },
  {
    value: '10',
    name: '10分'
  },
  {
    value: '15',
    name: '15分'
  },
]

export const AppraisalEntryForm = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const [menuItem, setMenuItem] = useState('選択してください');
  const displayClassName = displayModal ? styles.displayBlock : styles.displayNone;


  const handleOnClick = () => {
    console.log('clicked');
    setDisplayModal(!displayModal);
  }

  const handleListOnClick = (e) => {
    e.preventDefault()
    setMenuItem(e.currentTarget.value)
    setDisplayModal(!displayModal);
  }

  return (
    <form>
      <label>メニュー名</label>
      <p className={styles.selectbox} onClick={handleOnClick}>{ menuItem }</p>

      <div className={`${displayClassName} ${styles.modal}`}>
        <p>メニューを選んでね</p>
        <div>
          <button onClick={handleListOnClick} value='カレー'>カレー</button>
          <button onClick={handleListOnClick} value='シチュー'>シチュー</button>
          <button onClick={handleListOnClick} value='グラタン'>グラタン</button>
        </div>
      </div>
      <div className={`${styles.background} ${displayClassName}`} onClick={handleOnClick}></div>

      <button className={styles.nextButton} onClick={(e) => { e.preventDefault() }}>次へ</button>
    </form>
  )
}