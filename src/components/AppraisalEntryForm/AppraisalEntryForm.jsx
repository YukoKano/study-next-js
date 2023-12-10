import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'
import { COURSES } from '@/constants/COURSES';
import { Lists } from '../AppraisalEntryFormLists/AppraisalEntryFormLists';
import { SelectedMenu } from '../AppraisalEntryFormSelectedMenu/AppraisalEntryFormSelectedMenu';

const Label = ({ text, toggleDisplayModal, type}) => {
  const category = COURSES.find((e) => e.value === type);
  return (
    <>
      <label className={styles.label}>{category.label}</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal(category.value)}>{text}</p>
    </>
  )
}

const Modal = ({ modal, handleClick, toggleDisplayModal, type }) => {
  const category = COURSES.find((e) => e.value === type);

  return (
    modal && (
      <div className={`${styles.modal}`}>
        <p>{category.label}を選んでね</p>
        <Lists handleClick={handleClick} type={type} />
        <button onClick={() => toggleDisplayModal(type)}>戻る</button>
      </div>
    )
  )
}

const SelectBox = ({ text, valueModal, type, toggleDisplayModal, handleMenu }) => {
  return (
    <>
      <Label text={text} toggleDisplayModal={() => toggleDisplayModal(type)} type={type} />
      <Modal modal={valueModal} handleClick={(e) => handleMenu(type, e)} toggleDisplayModal={() => toggleDisplayModal(type)} type={type} />
    </>
  )
}


const NextButton = ({ menu, setSelectedMenu }) => {
  const notEntered = menu.appetizer === "選択してください" ||  menu.soup === "選択してください" || menu.meatDish === "選択してください" || menu.dessert === "選択してください"
  const nextButtonClick = (e) => {
    e.preventDefault();
    if (notEntered) {
      console.log("NG");
    } else {
      console.log("OK");
      setSelectedMenu(true);
    }
  }

  return (
    <button className={styles.nextButton} onClick={nextButtonClick}>次へ</button>
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

  const menu = {
    appetizer: appetizer,
    soup: soup,
    meatDish: meatDish,
    dessert: dessert
  }

  const toggleDisplayModal = (value) => {
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

  const handleMenu = (type, e) => {
    e.preventDefault();
    const text = e.currentTarget.innerText;

    switch (type) {
      case "appetizer":
        setAppetizer(text);
        break;
      case "soup":
        setSoup(text);
        break;
      case "meatDish":
        setMeatDish(text);
        break;
      case "dessert":
        setDessert(text);
        break;
      default:
        break;
    }
    toggleDisplayModal(type);
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
        <SelectBox type="appetizer" text={appetizer} valueModal={appetizerModal} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="soup" text={soup} valueModal={soupModal} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="meatDish" text={meatDish} valueModal={meatDishModal} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="dessert" text={dessert} valueModal={dessertModal} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />

        {displayBackground && (
          <div className={styles.background} onClick={handleBackground}></div>
        )}

        <NextButton menu={menu} setSelectedMenu={setSelectedMenu} />
      </form>

      {selectedMenu && (
        <SelectedMenu menu={menu} />
      )}
   </>
  )
}