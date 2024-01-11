import { useState } from "react";
import { COURSES } from "@/constants/COURSES";
import { Modal } from "../Modal/Modal";
import { SelectBox } from "../SelectBox/SelectBox";

export const MenuForm = ({ inputState, setInputState }) => {
  const [isDisplayModal, setIsDisplayModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(""); // ここに書くでOK

  return (
    <>
      {COURSES.map((course) => (
        <SelectBox
          key={course.label}
          course={course}
          inputState={inputState}
          isDisplayModal={isDisplayModal}
          setIsDisplayModal={setIsDisplayModal}
          setSelectedCategory={setSelectedCategory}
        />
      ))}

      <Modal
        selectedCategory={selectedCategory}
        isDisplayModal={isDisplayModal}
        setIsDisplayModal={setIsDisplayModal}
        setInputState={setInputState}
      />

      {/* // 中身は別データから持ってくる、処理が綺麗そう　categoryで持ってきて、filterを使うとか */}
    </>
  );
};
