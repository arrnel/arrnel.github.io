import React, {useEffect, useRef} from "react";
import {createPortal} from "react-dom";
import styles from "./ModalComponent.module.css";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}

const ModalComponent: React.FC<ModalProps> = ({
                                                  isOpen,
                                                  onClose,
                                                  children,
                                                  className = "",
                                              }) => {
    const modalContentRef = useRef<HTMLDivElement>(null);
    const scrollPositionRef = useRef<number>(0);

    useEffect(() => {
        if (isOpen) {

            scrollPositionRef.current = window.scrollY;

            document.body.classList.add('modal-open');
            document.body.style.overflow = 'hidden';


            return () => {

                document.body.classList.remove('modal-open');
                document.body.style.overflow = '';
                document.body.style.paddingRight = '';


                window.scrollTo({
                    top: scrollPositionRef.current
                });
            };
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    const handleWheelCapture = (e: React.WheelEvent) => {
        e.stopPropagation();
    };

    return createPortal(
        <div className={styles.modalOverlay}
             onClick={handleOverlayClick}
             onWheelCapture={handleWheelCapture} // Перехватываем событие на этапе capture
             data-test-id="modal-overlay"
        >
            <div ref={modalContentRef}
                 className={`${styles.modalContent} ${className}`}
                 onClick={(e) => e.stopPropagation()}
                 data-test-id="modal-form"
            >
                <div className={styles.modalHeader}
                     data-test-id="modal-header"
                >
                    <button className={styles.closeBtn}
                            onClick={onClose}
                            data-test-id="modal-close-button"
                    >
                        ×
                    </button>
                </div>

                <div className={styles.modalBody}
                     data-test-id="modal-body"
                >
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ModalComponent;