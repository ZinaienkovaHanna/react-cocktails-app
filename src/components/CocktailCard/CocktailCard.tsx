import { FC } from 'react';
import { Link } from 'react-router-dom';
import Image from '../Image';

import styles from './CocktailCard.module.css';

interface CocktailCardProps {
    imgSrc: string;
    name: string;
    id: string;
}

const CocktailCard: FC<CocktailCardProps> = ({ imgSrc, name, id }) => {
    return (
        <div className={styles.container}>
            <Image imgSrc={imgSrc} alt={name} className="card" id={id} />
            <div className={styles.title_container}>
                <Link to={`/cocktails/${id}`} className={styles.link}>
                    <h4 className={styles.name}>{name}</h4>
                </Link>
            </div>
        </div>
    );
};

export default CocktailCard;
