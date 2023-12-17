import styles from "@/styles/AppraisalEntryForm.module.css";
import { useState } from "react";
import { SelectedMenu } from "../SelectedMenu/SelectedMenu";
import { NextButton } from "../NextButton/NextButton";
import { PersonalInformationForm } from "../PersonalInformationForm/PersonalInformationForm";
import { MenuForm } from "../MenuForm/MenuForm";

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

const initialPersonalInfoState = {
  name: "",
  postcode: "",
  tel: "",
  email: "",
  radio: "",
};

export const AppraisalEntryForm = () => {
  const [menuState, setMenuState] = useState(initialMenuState);
  const [isDisplayBackground, setDisplayBackground] = useState(false);

  const [isDisplaySelectedMenu, setDisplaySelectedMenu] = useState(false);

  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfoState);

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
        <MenuForm
          menuState={menuState}
          toggleModal={toggleModal}
          updateMenu={updateMenu}
        />
        {!isDisplaySelectedMenu && (
          <NextButton
            menuTexts={menuState.texts}
            setDisplaySelectedMenu={setDisplaySelectedMenu}
          />
        )}
        {isDisplaySelectedMenu && (
          <>
            <SelectedMenu menuTexts={menuState.texts} />
            <PersonalInformationForm
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </>
        )}
      </form>

      {isDisplayBackground && (
        <div className={styles.background} onClick={hideBackground}></div>
      )}
    </>
  );
};
