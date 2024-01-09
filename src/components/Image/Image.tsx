import { FC, useState } from 'react';
import { mdiBookmark, mdiBookmarkOutline } from '@mdi/js';
import IconButton from '../IconButton';

import styles from './Image.module.css';

interface ImageProps {
    imgSrc: string;
    alt: string;
    type: string;
    isInMyList?: boolean;
    onClick?: () => void;
}

const Image: FC<ImageProps> = ({ imgSrc, alt, type, isInMyList, onClick }) => {
    const [imageSrc, setImageSrc] = useState<string>(imgSrc);

    const handleError = () =>
        setImageSrc('/static/images/placeholder_image.png');

    return (
        <div className={styles.container}>
            <img
                src={imageSrc}
                alt={alt}
                className={`${styles.image} ${
                    type === 'page' ? styles.page_image : ''
                }`}
                onError={handleError}
            />
            {type === 'page' ? (
                <IconButton
                    path={isInMyList ? mdiBookmark : mdiBookmarkOutline}
                    onClick={onClick || (() => {})}
                    title={
                        isInMyList ? 'delete from my list' : 'add to my list'
                    }
                    size={1}
                    type="image"
                />
            ) : (
                ''
            )}
        </div>
    );
};

export default Image;
