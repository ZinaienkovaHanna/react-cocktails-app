import { FC, useState } from 'react';
import Icon from '@mdi/react';
import { mdiBookmarkOutline } from '@mdi/js';

import styles from './Image.module.css';

interface ImageProps {
    imgSrc: string;
    alt: string;
    className: string;
}

const Image: FC<ImageProps> = ({ imgSrc, alt, className }) => {
    const [imageSrc, setImageSrc] = useState<string>(imgSrc);

    const handleError = () =>
        setImageSrc('/static/images/placeholder_image.png');

    return (
        <div className={styles.container}>
            <img
                src={imageSrc}
                alt={alt}
                className={
                    className === 'page' ? styles.page_image : styles.card_image
                }
                onError={handleError}
            />
            <button className={styles.button}>
                <Icon path={mdiBookmarkOutline} size={1} />
            </button>
        </div>
    );
};

export default Image;
