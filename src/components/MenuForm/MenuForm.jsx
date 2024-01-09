import { useState } from "react";
import { COURSES } from "@/constants/COURSES";
import { Modal } from "../Modal/Modal";
import { SelectBox } from "../SelectBox/SelectBox";

const courseCategories = COURSES.map((val) => val.course);

export const MenuForm = ({
  setInputState,
  isModal,
  toggleModal,
  inputState,
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  console.log(inputState);
  return (
    <>
      {courseCategories.map((categoryName) => (
        <SelectBox
          key={categoryName}
          category={categoryName}
          text={inputState.menu[categoryName]}
          toggleModal={toggleModal}
          setSelectedCategory={setSelectedCategory}
        />
      ))}

      <Modal
        isModal={isModal}
        category={selectedCategory}
        toggleModal={toggleModal}
        setInputState={setInputState}
      />

      {/* // 中身は別データから持ってくる、処理が綺麗そう　categoryで持ってきて、filterを使うとか */}
    </>
  );
};
