import { FC } from 'react';
import Icon from '@mdi/react';

import styles from './IconButton.module.css';

interface IconButtonProps {
    onClick: () => void;
    path: string;
    title?: string;
    size: number;
    type?: string | undefined;
}

const IconButton: FC<IconButtonProps> = ({
    onClick,
    path,
    title,
    size,
    type,
}) => {
    return (
        <button
            onClick={onClick}
            className={`${styles.button} ${
                type === 'image' ? styles.image_button : ''
            }`}
            title={title}
        >
            <Icon path={path} size={size} className={styles.icon} />
        </button>
    );
};

export default IconButton;
