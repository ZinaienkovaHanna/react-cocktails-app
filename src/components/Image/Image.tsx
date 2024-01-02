import { FC, useState } from 'react';

import styles from './Image.module.css';

interface ImageProps {
    imgSrc: string;
    alt: string;
    className: string;
    id: string;
}

const Image: FC<ImageProps> = ({ imgSrc, alt, className, id }) => {
    const [imageSrc, setImageSrc] = useState<string>(imgSrc);

    const handleError = () =>
        setImageSrc('/static/images/placeholder_image.png');

    return (
        <div className={styles.container}>
            <img
                src={imageSrc}
                alt={alt}
                className={`${styles.image} ${className}`}
                onError={handleError}
            />
            <div className={styles.overlay}></div>
        </div>
    );
};

export default Image;
