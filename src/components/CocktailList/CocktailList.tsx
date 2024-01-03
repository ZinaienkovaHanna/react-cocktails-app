import { FC } from 'react';
import { Link } from 'react-router-dom';
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
                <Link
                    to={`/cocktails/${cocktail.id}`}
                    key={cocktail.id}
                    className={styles.link}
                >
                    <CocktailCard
                        imgSrc={cocktail.image}
                        name={cocktail.name}
                        ingredients={cocktail.ingredients}
                    />
                </Link>
            ))}
        </div>
    );
};

export default CocktailList;
