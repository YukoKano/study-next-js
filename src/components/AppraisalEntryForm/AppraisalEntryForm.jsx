import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'
import { COURSES } from '@/constants/COURSES';
import { Lists } from '../AppraisalEntryFormLists/AppraisalEntryFormLists';
import { SelectedMenu } from '../AppraisalEntryFormSelectedMenu/AppraisalEntryFormSelectedMenu';

const findCategory = (type) => COURSES.find((e) => e.value === type);

const Label = ({ text, toggleDisplayModal, type}) => {
  const category = findCategory(type);
  return (
    <>
      <label className={styles.label}>{category.label}</label>
      <p className={styles.selectbox} onClick={() => toggleDisplayModal(category.value)}>{text}</p>
    </>
  )
}

const Modal = ({ modal, handleClick, toggleDisplayModal, type }) => {
  const category = findCategory(type);

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
  const notEntered = Object.values(menu).some(value => value === '選択してください'); // ここ分かってない
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

const initialMenuState = {
    modals : {
      appetizer: false,
      soup: false,
      meatDish: false,
      dessert: false
    },
    texts : {
      appetizer: '選択してください',
      soup: '選択してください',
      meatDish: '選択してください',
      dessert: '選択してください'
    }
}

export const AppraisalEntryForm = () => {
  const [displayBackground, setDisplayBackground] = useState(false);
  const [menuState, setMenuState] = useState(initialMenuState)
  const [selectedMenu, setSelectedMenu] = useState(false);

  const toggleDisplayModal = (value) => {
    setDisplayBackground(!displayBackground);
    setMenuState(prevMenuState => ({ ...prevMenuState, modals: {...prevMenuState.modals, [value]: !prevMenuState.modals[value] }}));
  }

  const handleMenu = (type, e) => {
    e.preventDefault();
    const text = e.currentTarget.innerText;

    setMenuState(prevMenuState => ({ ...prevMenuState, texts: { ...prevMenuState.texts, [type]: text } }));
    setDisplayBackground(!displayBackground);
    setMenuState(prevMenuState => ({ ...prevMenuState, modals: {...prevMenuState.modals, [type]: !prevMenuState.modals[type] }}));
  }

  const handleBackground = () => {
    setDisplayBackground(false);
    setMenuState(prevMenuState => ({ ...prevMenuState, modals: initialMenuState.modals}));
  }

  return (
    <>
      <form>
        <SelectBox type="appetizer" text={menuState.texts.appetizer} valueModal={menuState.modals.appetizer} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="soup" text={menuState.texts.soup} valueModal={menuState.modals.soup} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="meatDish" text={menuState.texts.meatDish} valueModal={menuState.modals.meatDish} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="dessert" text={menuState.texts.dessert} valueModal={menuState.modals.dessert} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <NextButton menu={menuState.texts} setSelectedMenu={setSelectedMenu} />
      </form>

      {displayBackground && (
        <div className={styles.background} onClick={handleBackground}></div>
      )}

      {selectedMenu && (
        <SelectedMenu menu={menuState.texts} />
      )}
   </>
  )
}