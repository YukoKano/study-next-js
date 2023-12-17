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
    </>
  );
};
