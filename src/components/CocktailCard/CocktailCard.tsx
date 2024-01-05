import { FC } from 'react';
import Image from '../Image';
import { IngredientType } from '../../types/cocktailsTypes';

import styles from './CocktailCard.module.css';

interface CocktailCardProps {
    imgSrc: string;
    name: string;
    ingredients?: IngredientType[];
}

const CocktailCard: FC<CocktailCardProps> = ({ imgSrc, name, ingredients }) => {
    return (
        <div className={styles.container}>
            <Image imgSrc={imgSrc} alt={name} className="card" />
            <div className={styles.title_container}>
                <h4 className={styles.name}>{name}</h4>
            </div>
        </div>
    );
};

export default CocktailCard;
