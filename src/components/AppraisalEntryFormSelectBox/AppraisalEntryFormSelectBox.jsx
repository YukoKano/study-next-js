import { Label } from '../AppraisalEntryFormLabel/AppraisalEntryFormLabel';
import { Modal } from '../AppraisalEntryFormModal/AppraisalEntryFormModal';

export const SelectBox = ({ text, isModal, category, toggleModal, updateMenu }) => {
  return (
    <>
      <Label text={text} toggleModal={() => toggleModal(category)} category={category} />
      <Modal isModal={isModal} handleClick={(e) => updateMenu(category, e)} toggleModal={() => toggleModal(category)} category={category} />
    </>
  )
}