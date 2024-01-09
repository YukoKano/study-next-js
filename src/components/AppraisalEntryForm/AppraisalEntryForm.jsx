import styles from "@/styles/AppraisalEntryForm.module.css";
import { useState } from "react";
import { SelectedMenu } from "../SelectedMenu/SelectedMenu";
import { NextButton } from "../NextButton/NextButton";
import { PersonalInformationForm } from "../PersonalInformationForm/PersonalInformationForm";
import { MenuForm } from "../MenuForm/MenuForm";
import { ConfirmButton } from "../ComfirmButton/ConfirmButton";

const initialMenuState = {
  appetizer: "選択してください",
  soup: "選択してください",
  meatDish: "選択してください",
  dessert: "選択してください",
};

const initialPersonalInfoState = {
  name: "",
  postcode: "",
  tel: "",
  email: "",
  radio: false,
};

export const AppraisalEntryForm = () => {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  const [menuState, setMenuState] = useState(initialMenuState);

  const [isMenuOK, setIsMenuOK] = useState(false);
  const [isAllOK, setIsAllOK] = useState(false);
  // menuも入ってないし、全部埋まってない時を、変数としてもつ
  const isConfirm = !isMenuOK || !isAllOK;

  const [personalInfo, setPersonalInfo] = useState(initialPersonalInfoState);

  return (
    <form>
      <MenuForm
        menuState={menuState}
        toggleModal={toggleModal}
        setMenuState={setMenuState} // いらないかも？
        isModal={isModal}
      />

      {/* // メニューが全部埋まっていて、ボタンを押した後 // 個人情報のフォーム */}
      <PersonalInformationForm
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        setIsAllOK={setIsAllOK}
        isMenuOK={isMenuOK} // なるべく出しわけは子でやる　親は呼ぶだけで具材は親が渡す　＝　出しわけするためのやつを子に渡す
      />
      {/* // menuが埋まってなかったら // 子にboolをわたしてOk //
      TODO:confirmと一緒になったらいいな〜 汎用的にするなら命名を変える */}
      <NextButton
        menuTexts={menuState}
        setIsMenuOK={setIsMenuOK}
        isShow={isMenuOK}
      />
      {/* // フォーム全部入ったら // 選んだやつ */}
      <SelectedMenu
        menuTexts={Object.assign(menuState, personalInfo)}
        isAllOK={isAllOK}
      />
      <ConfirmButton
        personalInfo={personalInfo}
        setIsAllOK={setIsAllOK}
        isConfirm={isConfirm}
      />
    </form>
  );
};
