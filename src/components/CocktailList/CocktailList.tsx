import { FC } from 'react';
import { Link } from 'react-router-dom';
import CocktailCard from '../CocktailCard';
import {
    CocktailType,
    CocktailByIngredientType,
} from '../../types/cocktailsTypes';

import styles from './CocktailList.module.css';

interface CocktailListProps {
    cocktails: CocktailType[] | CocktailByIngredientType[];
    title?: string;
}

const CocktailList: FC<CocktailListProps> = ({ cocktails, title }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.card_container}>
                {cocktails.map((cocktail) => (
                    <Link
                        to={`/cocktails/${cocktail.id}`}
                        key={cocktail.id}
                        className={styles.link}
                    >
                        <CocktailCard
                            imgSrc={cocktail.image}
                            name={cocktail.name}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CocktailList;
