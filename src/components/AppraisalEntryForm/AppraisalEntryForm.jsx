import { useState } from "react";
import { SelectedMenu } from "../SelectedMenu/SelectedMenu";
import { PersonalInformationForm } from "../PersonalInformationForm/PersonalInformationForm";
import { MenuForm } from "../MenuForm/MenuForm";
import { Button } from "../Button/Button";

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
  const [inputState, setInputState] = useState(initialState);
  const [isModal, setIsModal] = useState(false);
  const [isOK, setIsOK] = useState({ menu: false, personalInfo: false });

  return (
    <>
      <form>
        {/* // なるべく出しわけは子でやる　親は呼ぶだけで具材は親が渡す　＝　出しわけするためのやつを子に渡す */}
        <MenuForm
          inputState={inputState}
          setInputState={setInputState}
          isModal={isModal}
          toggleModal={() => setIsModal(!isModal)}
        />
        <PersonalInformationForm setInputState={setInputState} isOK={isOK} />
        <Button inputState={inputState} setIsOK={setIsOK} />
      </form>

      <SelectedMenu inputState={inputState} isOK={isOK} />
    </>
  );
};
