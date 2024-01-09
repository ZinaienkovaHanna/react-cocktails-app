import { FC } from 'react';
import { CocktailType } from '../../types/cocktailsTypes';
import { generateIngredientsList } from '../../utils/generateIngredientsList';

import styles from './CocktailInfo.module.css';

interface CocktailInfoProps {
    cocktail: CocktailType;
}

const CocktailInfo: FC<CocktailInfoProps> = ({ cocktail }) => {
    return (
        <div>
            <h2 className={styles.name}>{cocktail.name}</h2>
            <p
                className={styles.info}
            >{`${cocktail.category}, ${cocktail.alcoholic}, ${cocktail.glass}`}</p>
            <h4 className={styles.title_instructions}>Instructions</h4>
            <p>{cocktail.instructions}</p>
            <p className={styles.ingredients}>
                {generateIngredientsList(cocktail.ingredients)}
            </p>
        </div>
    );
};

export default CocktailInfo;
