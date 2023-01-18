import { FC } from 'react';
import ModalWrapper from 'styles/ModalAbout';

export interface Props {
  handleClose: any;
  show: boolean,
  children: any,
}

const ModalAbout: FC<Props> = ({ handleClose, show, children }) => {

  return (
    <>
      { show && (
        <ModalWrapper>
          <section className="modal-main">
            {children}
            <button type="button" onClick={handleClose}>
              Close
            </button>
          </section>
        </ModalWrapper>
      )}
    </>
  );
}

export default ModalAbout;