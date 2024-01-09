import styles from "@/styles/AppraisalEntryForm.module.css";
import { useState } from "react";
import { SelectedMenu } from "../SelectedMenu/SelectedMenu";
import { NextButton } from "../NextButton/NextButton";
import { PersonalInformationForm } from "../PersonalInformationForm/PersonalInformationForm";
import { MenuForm } from "../MenuForm/MenuForm";
import { Button } from "../ComfirmButton/ConfirmButton";

const initialState = {
  menu: {
    appetizer: "選択してください",
    soup: "選択してください",
    meatDish: "選択してください",
    dessert: "選択してください",
  },
  personalInfo: {
    name: "",
    postcode: "",
    tel: "",
    email: "",
    radio: false,
  },
};

export const AppraisalEntryForm = () => {
  const [isModal, setIsModal] = useState(false);
  const toggleModal = () => setIsModal(!isModal);

  const [inputState, setInputState] = useState(initialState);

  const [isMenuOK, setIsMenuOK] = useState(false);
  const [isAllOK, setIsAllOK] = useState(false);

  return (
    <form>
      {/* // なるべく出しわけは子でやる　親は呼ぶだけで具材は親が渡す　＝　出しわけするためのやつを子に渡す */}
      <MenuForm
        inputState={inputState}
        setInputState={setInputState}
        isModal={isModal}
        toggleModal={toggleModal}
      />

      <PersonalInformationForm
        setInputState={setInputState}
        isMenuOK={isMenuOK}
      />

      <Button
        inputState={inputState}
        setIsMenuOK={setIsMenuOK}
        setIsAllOK={setIsAllOK}
      />

      {/* // フォーム全部入ったら // 選んだやつ */}
      <SelectedMenu inputState={inputState} isAllOK={isAllOK} />
    </form>
  );
};
