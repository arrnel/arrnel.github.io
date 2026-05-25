import React, {useCallback, useEffect, useState} from 'react';
import styles from './ImageSliderComponent.module.css';
import {useTranslation} from 'react-i18next';
import useEmblaCarousel from 'embla-carousel-react';
import type {EmblaCarouselType} from 'embla-carousel';

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

    const repoName = import.meta.env.VITE_REPO_RESUME;
    const {t} = useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        dragFree: false,
        containScroll: 'trimSnaps',
    });

    if (images.length === 0) return null;

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const scrollTo = useCallback((index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
    }, [emblaApi]);

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setCurrentIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        onSelect(emblaApi);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    const wrapperStyle = aspectRatio ? {aspectRatio} : undefined;

    return (
        <div
            className={`${styles.sliderWrapper} ${className}`}
            style={wrapperStyle}
        >
            <div className={styles.embla} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {images.map((src, idx) => (
                        <div
                            key={src}
                            className={styles.embla__slide}
                        >
                            <img
                                src={repoName + src}
                                alt={`${title} — ${idx + 1}`}
                                className={styles.sliderImage}
                                loading={idx === 0 ? 'eager' : 'lazy'}
                                fetchPriority={idx === 0 ? 'high' : 'low'}
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        type="button"
                        className={`${styles.sliderArrow} ${styles.sliderArrowPrev}`}
                        onClick={scrollPrev}
                        aria-label={t('slider.prev_image')}
                    >
                        ←
                    </button>
                    <button
                        type="button"
                        className={`${styles.sliderArrow} ${styles.sliderArrowNext}`}
                        onClick={scrollNext}
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
                                onClick={() => scrollTo(idx)}
                                aria-label={`${t('slider.dot_nav')}: ${idx + 1}}`}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ImageSliderComponent;