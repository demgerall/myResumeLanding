import React, { useState, useRef, useEffect } from 'react';
import './Carousel.scss';

const importAll = r => Object.keys(r);
const images = importAll(
    import.meta.glob([
        '/public/images/all/*.png',
        '/public/images/all/*.jpg',
        '/public/images/all/*.jpeg',
        '/public/images/all/*.svg',
    ]),
);

export const Carousel = ({ direction }) => {
    const carouselRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const requesIdRef = useRef(null);
    const startPositionRef = useRef(0);
    const [selectedImage, setSelectedImage] = useState(null);

    const closeModal = () => {
        setSelectedImage(null);
    };

    useEffect(() => {
        const carousel = carouselRef.current;

        const animate = () => {
            if (!isHovered) {
                startPositionRef.current += direction === 'left' ? -0.3 : 0.3;

                if (startPositionRef.current >= carousel.scrollWidth / 2) {
                    startPositionRef.current = 0;
                } else if (startPositionRef.current <= 0) {
                    startPositionRef.current = carousel.scrollWidth / 2;
                }

                carousel.scrollLeft = startPositionRef.current;
            }

            requesIdRef.current = requestAnimationFrame(animate);
        };

        requesIdRef.current = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requesIdRef.current);
    }, [direction, isHovered]);

    return (
        <div
            className="carousel-container"
            ref={carouselRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="carousel-content">
                {images.map((image, index) => {
                    return (
                        <img
                            draggable="false"
                            key={index}
                            src={image}
                            className="carousel-image"
                            onClick={() => setSelectedImage(image)}
                        />
                    );
                })}
                {images.map((image, index) => {
                    return (
                        <img
                            draggable="false"
                            key={index}
                            src={image}
                            className="carousel-image"
                            onClick={() => setSelectedImage(image)}
                        />
                    );
                })}
            </div>
            {selectedImage && (
                <div className="modal-window-image" onClick={closeModal}>
                    <div
                        style={{ display: 'flex' }}
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            draggable="false"
                            src={selectedImage}
                            alt=""
                            className="modal-image"
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
