import Modal from 'react-modal';
import css from './ImageModal.module.css';

export function ImageModal({ isOpen, onRequestClose, image }) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={css.modal}
        overlayClassName={css.overlay}>
      {image && (
        <div className={css.modalContent}>
          <img src={image.urls.regular} alt={image.alt_description} className={css.modalImg}/>
          <p>{image.description}</p>
        </div>
      )}
    </Modal>
    )
}