import { FC } from 'react';
import CocktailCard from '../CocktailCard';
import { CocktailType } from '../../types/cocktailsTypes';

import styles from './CocktailList.module.css';

interface CocktailListProps {
    cocktails: CocktailType[];
}

const CocktailList: FC<CocktailListProps> = ({ cocktails }) => {
    return (
        <div className={styles.container}>
            {cocktails.map((cocktail) => (
                <CocktailCard
                    key={cocktail.id}
                    id={cocktail.id}
                    imgSrc={cocktail.image}
                    name={cocktail.name}
                    ingredients={cocktail.ingredients}
                />
            ))}
        </div>
    );
};

export default CocktailList;
