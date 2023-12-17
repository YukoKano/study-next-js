import styles from "@/styles/AppraisalEntryForm.module.css";
import { useState } from "react";
import { COURSES } from "@/constants/COURSES";
import { SelectedMenu } from "../SelectedMenu/SelectedMenu";
import { SelectBox } from "../SelectBox/SelectBox";
import { NextButton } from "../NextButton/NextButton";
import { PersonalInformationForm } from "../PersonalInformationForm/PersonalInformationForm";

const courseCategories = COURSES.map((val) => val.course);

const initialMenuState = {
  modals: {
    appetizer: false,
    soup: false,
    meatDish: false,
    dessert: false,
  },
  texts: {
    appetizer: "選択してください",
    soup: "選択してください",
    meatDish: "選択してください",
    dessert: "選択してください",
  },
};

export const AppraisalEntryForm = () => {
  const [menuState, setMenuState] = useState(initialMenuState);
  const [isDisplayBackground, setDisplayBackground] = useState(false);
  const [isDisplaySelectedMenu, setDisplaySelectedMenu] = useState(false);

  const toggleModal = (value) => {
    //  開く閉じる
    setDisplayBackground(!isDisplayBackground);
    setMenuState((prevMenuState) => ({
      ...prevMenuState,
      modals: {
        ...prevMenuState.modals,
        [value]: !prevMenuState.modals[value],
      },
    }));
  };

  const hideBackground = () => {
    // 初期化する
    setDisplayBackground(false);
    setMenuState((prevMenuState) => ({
      ...prevMenuState,
      modals: initialMenuState.modals,
    }));
  };

  const updateMenu = (category, e) => {
    // 選んだメニューを更新する
    const text = e.currentTarget.innerText;

    e.preventDefault();
    setDisplayBackground(!isDisplayBackground);
    setMenuState((prevMenuState) => ({
      texts: { ...prevMenuState.texts, [category]: text },
      modals: {
        ...prevMenuState.modals,
        [category]: !prevMenuState.modals[category],
      },
    }));
  };

  return (
    <>
      <form>
        {courseCategories.map((val) => (
          <SelectBox
            key={val}
            category={val}
            text={menuState.texts[val]}
            isModal={menuState.modals[val]}
            toggleModal={toggleModal}
            updateMenu={updateMenu}
          />
        ))}
        {!isDisplaySelectedMenu && (
          <NextButton
            menuTexts={menuState.texts}
            setDisplaySelectedMenu={setDisplaySelectedMenu}
          />
        )}
        {isDisplaySelectedMenu && <PersonalInformationForm />}
      </form>

      {isDisplayBackground && (
        <div className={styles.background} onClick={hideBackground}></div>
      )}
      {/* {isDisplaySelectedMenu && <SelectedMenu menuTexts={menuState.texts} />} */}
    </>
  );
};
