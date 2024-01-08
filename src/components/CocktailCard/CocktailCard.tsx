import { FC } from 'react';
import Image from '../Image';

import styles from './CocktailCard.module.css';

interface CocktailCardProps {
    imgSrc: string;
    name: string;
}

const CocktailCard: FC<CocktailCardProps> = ({ imgSrc, name }) => {
    return (
        <div className={styles.container}>
            <Image imgSrc={imgSrc} alt={name} type="card" />
            <div className={styles.title_container}>
                <h4 className={styles.name}>{name}</h4>
            </div>
        </div>
    );
};

export default CocktailCard;
