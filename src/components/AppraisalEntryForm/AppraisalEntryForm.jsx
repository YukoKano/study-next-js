import styles from "@/styles/AppraisalEntryForm.module.css";
import { useState } from "react";
import { SelectedMenu } from "../SelectedMenu/SelectedMenu";
import { NextButton } from "../NextButton/NextButton";
import { PersonalInformationForm } from "../PersonalInformationForm/PersonalInformationForm";
import { MenuForm } from "../MenuForm/MenuForm";
import { ConfirmButton } from "../ComfirmButton/ConfirmButton";

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
  radio: false,
};

export const AppraisalEntryForm = () => {
  const [menuState, setMenuState] = useState(initialMenuState);
  const [isDisplayBackground, setDisplayBackground] = useState(false);

  const [isMenuOK, setIsMenuOK] = useState(false);
  const [isAllOK, setIsAllOK] = useState(false);

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
  
  // menuも入ってないし、全部埋まってない時を、変数としてもつ
  const isConfirmButton = !isMenuOK || !isAllOK;

  return (
    // 呼び出すだけになる
    <>
      <form>
        // menuのフォーム
        <MenuForm
          menuState={menuState}
          toggleModal={toggleModal}
          updateMenu={updateMenu}
        />

        // メニューが全部埋まっていて、ボタンを押した後
        // 個人情報のフォーム
        <PersonalInformationForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
          setIsAllOK={setIsAllOK}
          isMenuOK={isMenuOK} // なるべく出しわけは子でやる　親は呼ぶだけで具材は親が渡す　＝　出しわけするためのやつを子に渡す
        />

        // menuが埋まってなかったら
        // 子にboolをわたしてOk
        // TODO:confirmと一緒になったらいいな〜 汎用的にするなら命名を変える
        <NextButton menuTexts={menuState.texts} setIsMenuOK={setIsMenuOK} isShow={isMenuOK}/>

        // フォーム全部入ったら
        // 選んだやつ
        <SelectedMenu
          menuTexts={Object.assign(menuState.texts, personalInfo)}
          isAllOK={isAllOK}
        />
        <ConfirmButton
          personalInfo={personalInfo}
          setIsAllOK={setIsAllOK}
          isConfirm={isConfirm}
        />
      </form>

      // モーダル出る時の背景のdiv
      // TODO: modalに持たせたい
      {/* {isDisplayBackground && (
        <div className={styles.background} onClick={hideBackground}></div>
      )} */}
    </>
  );
};
