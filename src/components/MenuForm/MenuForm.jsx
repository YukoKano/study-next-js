import { COURSES } from "@/constants/COURSES";
import { SelectBox } from "../SelectBox/SelectBox";

const courseCategories = COURSES.map((val) => val.course);

export const MenuForm = ({ toggleModal, menuState, hideBackground }) => {
  const [event, setEvent] = useState(null);

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

  return (
    <>
      {courseCategories.map((val) => (
        <SelectBox
          key={val}
          category={val}
          text={menuState.texts[val]}
          isModal={menuState.modals[val]}
          toggleModal={toggleModal}
        />
      ))}

      // TODO: menuでしか使わないからここでmodalを呼び出す
      <Modal
        isModal={menuState.modals[val]}
        handleClick={(e) => updateMenu(category, e)}
        toggleModal={() => toggleModal(category)}
        category={val}
        hideBackground={hideBackground}
      />
      // 中身は別データから持ってくる、処理が綺麗そう　categoryで持ってきて、filterを使うとか
    </>
  );
};
