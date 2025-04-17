import { useDispatch, useSelector } from 'react-redux';
import { selectModalOpen, selectModalContactId,selectModalContactName } from '../../redux/contacts/selectors';
import css from './ModalWind.module.css';
import { deleteContact } from '../../redux/contacts/operations';
import { setcCloseModal } from '../../redux/contacts/slice';

export default function ModalWind() {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectModalOpen);
  const contactId = useSelector(selectModalContactId);
  const contactName = useSelector(selectModalContactName);

  const handleConfirm = () => {
    if (contactId) {
      dispatch(deleteContact(contactId));
    }
    dispatch(setcCloseModal());
  };

  const handleCancel = () => {
    dispatch(setcCloseModal());
  };

  if (!isOpen) return null;

  return (
    <div className={css.overlay} onClick={handleCancel}>
    <div className={css.modal} onClick={(e) => e.stopPropagation()}>
      <div className={css.div}>
        <p>
          Are you sure you want to delete</p> <h3>{contactName}</h3><p>?</p>
          </div>
          <div className={css.div2}>
          <button className={css.btn} onClick={handleConfirm}>Yes</button>
          <button className={css.btn} onClick={handleCancel}>Cancel</button>
</div>
      </div>
    </div>
  );
}