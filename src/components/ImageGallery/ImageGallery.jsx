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

  return (
    <>
      <ul className={css.ul}>
      {info
    .filter((el) => el && el.urls && el.urls.small) // 🔍 Перевірка перед map
    .map((el) => (
      <li
        className={css.li}
        key={el.id}
        onClick={() => openModalWithImage(el)}
      >
            <img className={css.img} src={el.urls.small} alt={el.alt_description || 'Image'} />
          </li>
        ))}
      </ul>

      <ImageModal
  el={selectedImage}
  openModal={!!selectedImage} 
  closeModal={closeModal}
/>
    </>
  );
}
