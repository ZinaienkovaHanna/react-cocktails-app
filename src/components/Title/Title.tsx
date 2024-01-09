import { FC } from 'react';
import { mdiChevronDown } from '@mdi/js';
import IconButton from '../IconButton';

import styles from './Title.module.css';

const Title: FC = () => {
    const scrollToSection = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight / 3.5,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Great <span>cocktails</span>
            </h3>
            <h6 className={styles.subtitle}>recipes you should know</h6>
            <IconButton
                path={mdiChevronDown}
                size={2}
                onClick={scrollToSection}
            />
        </div>
    );
};

export default Title;
