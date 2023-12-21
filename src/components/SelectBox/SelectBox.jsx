import { Label } from "../Label/Label";
import { Modal } from "../Modal/Modal";

export const SelectBox = ({
  text,
  isModal,
  category,
  toggleModal,
  updateMenu,
}) => {
  return (
    <>
      // セレクトボックスとがっちゃんこして良さそう
      <Label
        text={text}
        toggleModal={() => toggleModal(category)}
        category={category}
      />
      // コレはなくす
      {/* <Modal
        isModal={isModal}
        handleClick={(e) => updateMenu(category, e)}
        toggleModal={() => toggleModal(category)}
        category={category}
      /> */}
    </>
  );
};
