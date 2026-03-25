import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './ImageSliderComponent.module.css';

interface ImageSliderProps {
    images: string[];
    title: string;
    aspectRatio?: string;
    className?: string;
}

const ImageSliderComponent: React.FC<ImageSliderProps> = ({
                                                              images,
                                                              title,
                                                              aspectRatio,
                                                              className = '',
                                                          }) => {
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    if (images.length === 0) return null;

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    const goToImage = (index: number) => setCurrentIndex(index);

    const wrapperStyle = aspectRatio ? {aspectRatio} : undefined;

    return (
        <div
            className={`${styles.sliderWrapper} ${className}`}
            style={wrapperStyle}
        >
            <div className={styles.images}>
                {images.map((src, idx) => {
                    const isActive = idx === currentIndex;

                    return (
                        <img
                            key={src}
                            src={src}
                            alt={`${title} — ${idx + 1}`}
                            className={`${styles.sliderImage} ${isActive ? styles.active : ''}`}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            fetchPriority={idx === 0 ? 'high' : 'low'}
                            decoding="async"
                        />
                    );
                })}
            </div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`}
                        onClick={prevImage}
                        aria-label={t('slider.prev_image')}
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className={`${styles.sliderArrow} ${styles.sliderArrowNext}`}
                        onClick={nextImage}
                        aria-label={t('slider.next_image')}
                    >
                        →
                    </button>

                    <div className={styles.sliderDots} role="tablist">
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                type="button"
                                className={`${styles.sliderDot} ${idx === currentIndex ? styles.active : ''}`}
                                onClick={() => goToImage(idx)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageSliderComponent;