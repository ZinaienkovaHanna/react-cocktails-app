import { FC, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
    addCocktailAction,
    deleteCocktailAction,
} from '../../store/cocktails/actionCreators';
import Image from '../Image';
import CocktailInfo from '../CocktailInfo';
import { CocktailType } from '../../types/cocktailsTypes';
import { checkingCocktailInMyList } from '../../utils/checkingCocktailInMyList';

import styles from './CocktailPage.module.css';

interface CocktailPageType {
    cocktail: CocktailType;
}

const CocktailPage: FC<CocktailPageType> = ({ cocktail }) => {
    const { cocktails } = useAppSelector((state) => state.cocktails);
    const dispatch = useAppDispatch();

    const [isInMyList, setIsInMyList] = useState<boolean>(
        checkingCocktailInMyList(cocktails, cocktail.id)
    );

    const handleAddAndDeleteCocktail = () => {
        if (!isInMyList) {
            setIsInMyList(true);
            dispatch(addCocktailAction(cocktail));
        } else {
            setIsInMyList(false);
            dispatch(deleteCocktailAction(cocktail.id));
        }
    };

    return (
        <div className={styles.container}>
            <Image
                imgSrc={cocktail.image}
                alt={cocktail.name}
                type="page"
                isInMyList={isInMyList}
                onClick={handleAddAndDeleteCocktail}
            />
            <CocktailInfo cocktail={cocktail} />
        </div>
    );
};

export default CocktailPage;
