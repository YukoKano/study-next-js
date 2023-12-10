import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'
import { COURSES } from '@/constants/COURSES';


const Label = ({ text, toggleDisplayModal, type}) => {
  const category = COURSES.find((e) => e.value === type);
  return (
    <>
      <label className={styles.label}>{category.label}</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal(category.value)}>{text}</p>
    </>
  )
}

const List = ({ value, text, handleClick }) => {
  return (
    <li className={styles.list}><button onClick={handleClick} value={value}>{text}</button></li>
  )
}

const Lists = ({ handleClick, type }) => {
  const category = COURSES.find((e) => e.value === type);

  if (!category || !category.items) {
    console.error(`Category ${type} not found or has no items.`);
    return null; // エラー処理や何も表示しない場合の処理を追加することも考えられます
  }

  return (
    <ul className={styles.ul}>
      {category.items.map((item) => (
        <List
          key={item.value}
          value={item.value}
          text={item.name}
          handleClick={handleClick}
        />
      ))}
    </ul>
  )
}

const Modal = ({ modal, handleClick, handleModal, type }) => {
  const category = COURSES.find((e) => e.value === type);

  return (
    modal && (
      <div className={`${styles.modal}`}>
        <p>{category.label}を選んでね</p>
        <Lists handleClick={handleClick} type={type} />
        <button onClick={() => handleModal(type)}>戻る</button>
      </div>
    )
  )
}

const NextButton = ({ appetizer, soup, meatDish, dessert, setSelectedMenu }) => {
  const notEntered = appetizer === "選択してください" ||  soup === "選択してください" || meatDish === "選択してください" || dessert === "選択してください"
  const nextButtonClick = (e) => {
    e.preventDefault();
    if (notEntered) {
      console.log("NG");
    } else {
      console.log("OK");
      console.log(appetizer, soup, meatDish, dessert);
      setSelectedMenu(true);
    }
  }

  return (
    <button className={styles.nextButton} onClick={nextButtonClick}>次へ</button>
  )
}

const SelectedMenu = ({ appetizer, soup, meatDish, dessert }) => {
  return (
    <dl className={styles.selectedMenu} >
      <dd className={styles.selectedMenuTitle}>前菜</dd>
      <dt>{appetizer}</dt>
      <dd className={styles.selectedMenuTitle}>スープ</dd>
      <dt>{soup}</dt>
      <dd className={styles.selectedMenuTitle}>肉料理</dd>
      <dt>{meatDish}</dt>
      <dd className={styles.selectedMenuTitle}>デザート</dd>
      <dt>{dessert}</dt>
    </dl>
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

  const [selectedMenu, setSelectedMenu] = useState(false);


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



  return (
    <>
      <form>
        <Label text={appetizer} toggleDisplayModal={toggleDisplayModal} type="appetizer" />
        <Modal modal={appetizerModal} handleClick={handleAppetizer} handleModal={toggleDisplayModal} type="appetizer" />

        <Label text={soup} toggleDisplayModal={toggleDisplayModal} type="soup" />
        <Modal modal={soupModal} handleClick={handleSoup} handleModal={toggleDisplayModal} type="soup" />


        <Label text={meatDish} toggleDisplayModal={toggleDisplayModal} type="meatDish" />
        <Modal modal={meatDishModal} handleClick={handleMeatDish} handleModal={toggleDisplayModal} type="meatDish" />


        <Label text={dessert} toggleDisplayModal={toggleDisplayModal} type="dessert" />
        <Modal modal={dessertModal} handleClick={handleDessert} handleModal={toggleDisplayModal} type="dessert" />


        {displayBackground && (
          <div className={styles.background} onClick={handleBackground}></div>
        )}

        <NextButton appetizer={appetizer} soup={soup} meatDish={meatDish} dessert={dessert} setSelectedMenu={setSelectedMenu} />
      </form>

      {selectedMenu && (
        <SelectedMenu appetizer={appetizer} soup={soup} meatDish={meatDish} dessert={dessert} />
      )}
   </>
  )
}