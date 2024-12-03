import classes from '../../../assets/styles/Modal.module.css';

function Modal({ children }) {
  function closeHandler({ children }){

  }
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;