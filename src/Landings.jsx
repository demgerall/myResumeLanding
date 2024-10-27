import React, { useState } from 'react';
import './Landings.scss';

const importAll = r => Object.keys(r);
const images = importAll(
    import.meta.glob([
        '/public/images/landings/*.png',
        '/public/images/landings/*.jpg',
        '/public/images/landings/*.jpeg',
        '/public/images/landings/*.svg',
    ]),
);

export const Landings = () => {
    const [visibleRows, setVisibleRows] = useState(2);
    const [selectedImage, setSelectedImage] = useState(null);
    const imagesPerRow = 5;

    const closeModal = () => {
        setSelectedImage(null);
    };

    const showMoreImages = () => {
        setVisibleRows(visibleRows + 2);
    };

    const renderImages = () => {
        const visibleImages = images.slice(0, visibleRows * imagesPerRow);
        return visibleImages.map((image, index) => {
            return (
                <img
                    key={index}
                    src={image}
                    alt=""
                    draggable="false"
                    className="gallery-image"
                    onClick={() => setSelectedImage(image)}
                />
            );
        });
    };

    return (
        <div className="image-gallery" style={{ padding: '0 0 30px 0' }}>
            <div className="image-grid">{renderImages()}</div>
            {visibleRows * imagesPerRow < images.length && (
                <button className="show-more-button" onClick={showMoreImages}>
                    Больше работ <p className="more-icon"></p>
                </button>
            )}
            {selectedImage && (
                <div className="modal-window-image" onClick={closeModal}>
                    <div
                        style={{ display: 'flex' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt=""
                            className="modal-image"
                            draggable="false"
                        />
                        <p>
                            <button
                                onClick={closeModal}
                                className="modal-image-close-button"
                            ></button>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};
