// src/hooks/useSectionView.ts
import { useEffect, useRef } from 'react';
import {analytics} from "../service/analytics.instance.ts";

export const useSectionView = (sectionId: string) => {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    analytics.viewSectionEvent(sectionId);
                    observer.unobserve(el); // срабатывает один раз
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [sectionId]);

    return ref;
};