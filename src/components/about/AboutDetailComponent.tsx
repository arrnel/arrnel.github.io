import React, {type ReactNode} from "react";
import styles from './AboutDetailComponent.module.css'

const AboutDetailComponent: React.FC<{
    icon: string,
    title: string,
    description: ReactNode | string
}> = ({
          icon,
          title,
          description
      }) => {

    return (
        <div className={styles.detailContainer}>

            <img
                className={styles.icon}
                src={icon}
                alt={`${title} icon`}
            />

            <h4 className={styles.aboutDetailTitle}>
                {title}
            </h4>

            <p className={styles.aboutDetailDescription}>
                {description}
            </p>

        </div>
    );
}

export default AboutDetailComponent;