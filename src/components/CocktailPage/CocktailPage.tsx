import { FC } from 'react';
import { CocktailType } from '../../types/cocktailsTypes';
import Image from '../Image';
import { generateIngredientsList } from '../../utils/generateIngredientsList';

import styles from './CocktailPage.module.css';

interface CocktailPageType {
    cocktail: CocktailType[];
}

const CocktailPage: FC<CocktailPageType> = ({ cocktail }) => {
    return (
        <div className={styles.container}>
            <Image
                imgSrc={cocktail[0].image}
                alt={cocktail[0].name}
                className="page"
            />
            <div className={styles.container_info}>
                <h2 className={styles.name}>{cocktail[0].name}</h2>
                <p
                    className={styles.info}
                >{`${cocktail[0].category}, ${cocktail[0].alcoholic}, ${cocktail[0].glass}`}</p>
                <h4 className={styles.title_instructions}>Instructions</h4>
                <p>{cocktail[0].instructions}</p>
                <p className={styles.ingredients}>
                    {generateIngredientsList(cocktail[0].ingredients)}
                </p>
            </div>
        </div>
    );
};

export default CocktailPage;
