import { COURSES } from "@/constants/COURSES";
import { SelectBox } from "../SelectBox/SelectBox";

const courseCategories = COURSES.map((val) => val.course);

export const MenuForm = ({ toggleModal, updateMenu, menuState }) => {
  return (
    <>
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
      // TODO: menuでしか使わないからここでmodalを呼び出す
      {/* <Modal
        isModal={isModal}
        handleClick={(e) => updateMenu(category, e)}
        toggleModal={() => toggleModal(category)}
        category={category}
      /> */}
      // 中身は別データから持ってくる、処理が綺麗そう　categoryで持ってきて、filterを使うとか
    </>
  );
};
