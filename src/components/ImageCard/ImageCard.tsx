import React from 'react';
import { Image } from '../../image-api';
import css from './ImageCard.module.css';

interface ImageCardProps {
  image: Image;
  onClick: () => void;
} 

const ImageCard: React.FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img src={image.urls.small} alt={image.alt_description} className={css.img} />
    </div>
  );
};

export default ImageCard;
