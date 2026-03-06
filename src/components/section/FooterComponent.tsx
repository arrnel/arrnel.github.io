import {useTranslation} from 'react-i18next';
import NavigationComponent from "../navigation/NavigationComponent.tsx";
import React from "react";
import styles from './FooterComponent.module.css'

const FooterComponent: React.FC<{
    sections: string[];
}> = ({ sections }) => {
    const { t } = useTranslation();

    return (
        <footer>
            <div className={styles.navContainer}>
                <NavigationComponent
                    data-test-id="footer-nav"
                    sectionTitles={sections}
                />
            </div>
            <p className={styles.copyright}
               data-test-id="copyright"
            >
                {t('copyright')}
            </p>
        </footer>
    );
};

export default FooterComponent;