import styles from '@/styles/AppraisalEntryForm.module.css'
import { useState } from 'react'
import { COURSES } from '@/constants/COURSES';
import { Lists } from '../AppraisalEntryFormLists/AppraisalEntryFormLists';
import { SelectedMenu } from '../AppraisalEntryFormSelectedMenu/AppraisalEntryFormSelectedMenu';

const courseCategories = COURSES.map((val) => val.course);
const findCategory = (category) => COURSES.find((val) => val.course === category);

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

const Label = ({ text, toggleModal, category}) => {
  const menu = findCategory(category);

  return (
    <>
      <label className={styles.label}>{menu.label}</label>
      <p className={styles.selectbox} onClick={() => toggleModal(menu.course)}>{text}</p>
    </>
  )
}

const Modal = ({ isModal, handleClick, toggleModal, category }) => {
  const menu = findCategory(category);

  return (
    isModal && (
      <div className={`${styles.modal}`}>
        <p>{menu.label}を選んでね</p>
        <Lists handleClick={handleClick} category={category} />
        <button onClick={() => toggleModal(category)}>戻る</button>
      </div>
    )
  )
}

const SelectBox = ({ text, isModal, category, toggleModal, changeMenu }) => {
  return (
    <>
      <Label text={text} toggleModal={() => toggleModal(category)} category={category} />
      <Modal isModal={isModal} handleClick={(e) => changeMenu(category, e)} toggleModal={() => toggleModal(category)} category={category} />
    </>
  )
}


const NextButton = ({ menu, setDisplaySelectedMenu }) => {
  const notEntered = Object.values(menu).some(val => val === '選択してください'); // ここ分かってない

  const nextButtonClick = (e) => {
    e.preventDefault();
    if (notEntered) {
      console.log("NG");
    } else {
      console.log("OK");
      setDisplaySelectedMenu(true);
    }
  }

  return (
    <button className={styles.nextButton} onClick={nextButtonClick}>次へ</button>
  )
}



export const AppraisalEntryForm = () => {
  const [menuState, setMenuState] = useState(initialMenuState);
  const [isDisplayBackground, setDisplayBackground] = useState(false);
  const [isDisplaySelectedMenu, setDisplaySelectedMenu] = useState(false);

  const toggleModal = (value) => {
    setDisplayBackground(!isDisplayBackground);
    setMenuState(prevMenuState => ({ ...prevMenuState, modals: {...prevMenuState.modals, [value]: !prevMenuState.modals[value] }}));
  }

  const hideBackground = () => {
    // 初期化する
    setDisplayBackground(false);
    setMenuState(prevMenuState => ({ ...prevMenuState, modals: initialMenuState.modals}));
  }

  const changeMenu = (category, e) => {
    e.preventDefault();
    const text = e.currentTarget.innerText;

    setDisplayBackground(!isDisplayBackground);
    setMenuState(prevMenuState => ({...prevMenuState, texts: { ...prevMenuState.texts, [category]: text } , modals: {...prevMenuState.modals, [category]: !prevMenuState.modals[category] }}));
  }

  return (
    <>
      <form>
        {courseCategories.map((val) => (
          <SelectBox key={val} category={val} text={menuState.texts[val]} isModal={menuState.modals[val]} toggleModal={toggleModal} changeMenu={changeMenu} />
        ))}
        <NextButton menu={menuState.texts} setDisplaySelectedMenu={setDisplaySelectedMenu} />
      </form>

      {isDisplayBackground && (
        <div className={styles.background} onClick={hideBackground}></div>
      )}

      {isDisplaySelectedMenu && (
        <SelectedMenu menu={menuState.texts} />
      )}
   </>
  )
}