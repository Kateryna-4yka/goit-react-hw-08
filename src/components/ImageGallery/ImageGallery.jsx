import css from './ImageGallery.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectInfo, selectLoading, selectError } from '../../redux/img/selectors';
import ImageModal from '../ImageModal/ImageModal';

export default function ImageGallery() {
  const dispatch = useDispatch();
  const loader = useSelector(selectLoading);
  const error = useSelector(selectError);
  const info = useSelector(selectInfo);


  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModalWithImage = (image) => {
    if (!image || !image.urls) return;
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsOpen(false);
  };
  const isEmpty = !loader && !error && info.length === 0;
  return (
    <>
      {loader && <p className={css.message}>Loading...</p>}

      {error && <p className={css.error}>Oops! Something went wrong: {error}</p>}

      {isEmpty && <p className={css.message}>No results found for your query.</p>}

      {!loader && !error && info.length > 0 && (
        <ul className={css.ul}>
          {info
            .filter((el) => el && el.urls && el.urls.small)
            .map((el) => (
              <li
                className={css.li}
                key={el.id}
                onClick={() => openModalWithImage(el)}
              >
                <img
                  className={css.img}
                  src={el.urls.small}
                  alt={el.alt_description || 'Image'}
                />
              </li>
            ))}
        </ul>
      )}

      <ImageModal
        el={selectedImage}
        openModal={!!selectedImage}
        closeModal={closeModal}
      />
    </>
  );
}