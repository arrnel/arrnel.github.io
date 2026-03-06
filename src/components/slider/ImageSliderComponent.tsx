import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import styles from './ImageSliderComponent.module.css';

interface ImageSliderProps {
    images: string[];
    projectTitleKey: string;
    aspectRatio?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
                                                     images,
                                                     projectTitleKey,
                                                     aspectRatio = '1 / 1',
                                                 }) => {
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    if (images.length === 0) return null;

    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const goToImage = (index: number) => {
        setCurrentIndex(index);
    };

    const title = t(projectTitleKey);
    const prevHint = t('slider.prev_image');
    const nextHint = t('slider.next_image');
    const goToHint = t('slider.navigate_to');
    const currentHint = t('slider.current_image');

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderWrapper} style={{aspectRatio}}>
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
                            id={`slide-${idx}`}
                        />
                    );
                })}

                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`}
                            onClick={prevImage}
                            aria-label={prevHint}
                        >
                            ←
                        </button>

                        <button
                            type="button"
                            className={`${styles.sliderArrow} ${styles.sliderArrowNext}`}
                            onClick={nextImage}
                            aria-label={nextHint}
                        >
                            →
                        </button>

                        <div
                            className={styles.sliderDots}
                            role="tablist"
                            aria-label={t('slider.image_navigation')}
                        >
                            {images.map((_, idx) => {
                                const isActive = idx === currentIndex;
                                return (
                                    <button
                                        key={idx}
                                        type="button"
                                        role="tab"
                                        tabIndex={isActive ? 0 : -1}
                                        aria-selected={isActive}
                                        aria-controls={`slide-${idx}`}
                                        aria-label={
                                            isActive
                                                ? `${goToHint} ${idx + 1} (${currentHint})`
                                                : `${goToHint} ${idx + 1}`
                                        }
                                        className={`${styles.sliderDot} ${isActive ? styles.active : ''}`}
                                        onClick={() => goToImage(idx)}
                                    />
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageSlider;