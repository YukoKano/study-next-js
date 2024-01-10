import { InputForm } from "../InputForm/InputForm";
import { RadioForm } from "../RadioForm/RadioForm";
import { PERSONAL_INFO } from "@/constants/PERSONAL_INFORMATION";

export const PersonalInformationForm = ({ setInputState, isOK }) => {
  if (!isOK["menu"]) return null;

  return (
    <>
      {PERSONAL_INFO.map((info) => (
        <InputForm
          key={info.name}
          name={info.name}
          id={info.id}
          type={info.type}
          setInputState={setInputState}
        />
      ))}

      <RadioForm name="campaign" setInputState={setInputState} />
    </>
  );
};
