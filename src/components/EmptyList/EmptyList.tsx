import { FC } from 'react';

import styles from './EmptyList.module.css';

const EmptyList: FC = () => {
    return (
        <div className={styles.container}>
            <h4 className={styles.title}>Empty list...</h4>
        </div>
    );
};

export default EmptyList;
