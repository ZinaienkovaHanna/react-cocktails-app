import { FC, useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiBookmarkOutline, mdiBookmark } from '@mdi/js';
import {
    getCocktailStatus,
    updateCocktailStatus,
} from '../../utils/localStorage';

import styles from './Image.module.css';

interface ImageProps {
    imgSrc: string;
    alt: string;
    className: string;
    id: string;
}

export interface StatusType {
    bookmarked: true | false;
}

const Image: FC<ImageProps> = ({ imgSrc, alt, className, id }) => {
    const [imageSrc, setImageSrc] = useState<string>(imgSrc);
    const [status, setStatus] = useState<StatusType>({
        bookmarked: false,
    });

    useEffect(() => {
        const storedStatus = getCocktailStatus(id);

        if (storedStatus) {
            setStatus(storedStatus);
        }
    }, [id]);

    const handleBookmarkClick = () => {
        const newStatus: StatusType = {
            bookmarked: status.bookmarked === true ? false : true,
        };
        setStatus(newStatus);
        updateCocktailStatus(id, newStatus);
    };

    const handleError = () =>
        setImageSrc('/static/images/placeholder_image.png');

    return (
        <div className={styles.container}>
            <img
                src={imageSrc}
                alt={alt}
                className={`${styles.image} ${
                    className === 'page' ? styles.page_image : ''
                }`}
                onError={handleError}
            />
            <button
                className={`${styles.button} ${
                    className === 'page' ? styles.page_button : ''
                }`}
                onClick={handleBookmarkClick}
            >
                <Icon
                    path={
                        status.bookmarked === true
                            ? mdiBookmark
                            : mdiBookmarkOutline
                    }
                    size={1}
                />
            </button>
        </div>
    );
};

export default Image;
