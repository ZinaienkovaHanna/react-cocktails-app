import { FC } from 'react';

import styles from './Footer.module.css';

const Footer: FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <p
                    className={styles.info}
                >{`© ${currentYear} The Cocktail App`}</p>
            </div>
        </div>
    );
};

export default Footer;
