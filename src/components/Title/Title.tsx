import { FC } from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown } from '@mdi/js';

import styles from './Title.module.css';

const Title: FC = () => {
    const scrollToSection = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight / 3,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Great <span>cocktails</span>
            </h3>
            <h6 className={styles.subtitle}>recipes you should know</h6>
            <button className={styles.scroll_button} onClick={scrollToSection}>
                <Icon path={mdiChevronDown} size={3} className={styles.icon} />
            </button>
        </div>
    );
};

export default Title;
