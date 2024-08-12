import ImageCard from "../ImageCard/ImageCard";
import css from "../ImageGallery/ImageGallery.module.css"

export default function ImageGallery({images, onImageClick}){
    return(
        <ul className={css.galleryItem}>
            {images.map((image) => (
            <li key={image.id}>
                <ImageCard image={image} onClick={() => onImageClick(image)} />
            </li>
            ))}
      </ul>
    )
}