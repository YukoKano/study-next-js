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




export const AppraisalEntryForm = () => {
  const [displayBackground, setDisplayBackground] = useState(false);

  const initialModals = {
    appetizer: false,
    soup: false,
    meatDish: false,
    dessert: false
  }
  const [modals, setModals] = useState(initialModals);

  const initialMenu = {
    appetizer: '選択してください',
    soup: '選択してください',
    meatDish: '選択してください',
    dessert: '選択してください'
  }
  const [menu, setMenu] = useState(initialMenu);

  const [selectedMenu, setSelectedMenu] = useState(false);

  const toggleDisplayModal = (value) => {
    setDisplayBackground(!displayBackground);
    setModals(prevModals => ({ ...prevModals, [value]: !prevModals[value] })); //ここわからん
  }

  const handleMenu = (type, e) => {
    e.preventDefault();
    const text = e.currentTarget.innerText;

    setMenu(prevMenu => ({ ...prevMenu, [type]: text  }));
    setDisplayBackground(!displayBackground);
    setModals(prevModals => ({ ...prevModals, [type]: false }));
  }

  const handleBackground = () => {
    setDisplayBackground(false);
    setModals(initialModals);
  }

  return (
    <>
      <form>
        <SelectBox type="appetizer" text={menu.appetizer} valueModal={modals.appetizer} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="soup" text={menu.soup} valueModal={modals.soup} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="meatDish" text={menu.meatDish} valueModal={modals.meatDish} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <SelectBox type="dessert" text={menu.dessert} valueModal={modals.dessert} toggleDisplayModal={toggleDisplayModal} handleMenu={handleMenu} />
        <NextButton menu={menu} setSelectedMenu={setSelectedMenu} />
      </form>

      {displayBackground && (
        <div className={styles.background} onClick={handleBackground}></div>
      )}

      {selectedMenu && (
        <SelectedMenu menu={menu} />
      )}
   </>
  )
}