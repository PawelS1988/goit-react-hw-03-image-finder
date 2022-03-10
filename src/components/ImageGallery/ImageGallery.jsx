import React, { useState } from "react";
import styles from "./ImageGallery.module.css";
import ImageGalleryItems from "./../ImageGalleryItems/ImageGalleryItems";
import Modal from "../Modal/Modal";

const ImageGallery = ({ images }) => {
  const [lightbox, setLightbox] = useState({ visibility: false, imgUrl: "" });

  return (
    <ul className={styles.ImageGallery}>
      <ImageGalleryItems images={images} setLightbox={setLightbox} />
      <Modal
        lightbox={lightbox}
        setLightbox={setLightbox}
        onKeyDown={(e) => alert("dance")}
      />
    </ul>
  );
};

export default ImageGallery;
