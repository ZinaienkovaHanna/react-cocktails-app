import { FC, useState, useEffect } from 'react';
import CocktailList from '../CocktailList';
import EmptyList from '../EmptyList';
import categories from '../../data/categories.json';
import { getCocktailsByCategory } from '../../services/cocktailsAPI';

import styles from './CategoryDropdown.module.css';

const CategoryDropdown: FC = () => {
    const [cocktailsByCategory, setCocktailsByCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        async function fetchCocktails(category: string) {
            try {
                const cocktails = await getCocktailsByCategory(category);
                setCocktailsByCategory(cocktails);
            } catch (error) {
                console.error('Error fetching cocktails:', error);
            }
        }

        if (selectedCategory) {
            fetchCocktails(selectedCategory);
        }
    }, [selectedCategory]);

    function handleChange(value: string) {
        setSelectedCategory(value);
        value = '';
    }

    return (
        <div className={styles.container}>
            <div className={styles.container_dropdown}>
                <label htmlFor="category" className={styles.label}>
                    Select a category:
                </label>
                <select
                    onChange={(e) => handleChange(e.target.value)}
                    className={styles.select}
                >
                    <option value="" className={styles.option}>
                        Select...
                    </option>
                    {categories.map((category) => (
                        <option
                            key={category.id}
                            value={category.category}
                            className={styles.option}
                        >
                            {category.category}
                        </option>
                    ))}
                </select>
            </div>
            {cocktailsByCategory.length === 0 ? (
                <EmptyList />
            ) : (
                <CocktailList
                    cocktails={cocktailsByCategory}
                    title={selectedCategory}
                />
            )}
        </div>
    );
};

export default CategoryDropdown;
