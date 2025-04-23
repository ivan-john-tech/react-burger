import { useState } from 'react';
import styles from './BurgerIngredients.module.css'
import ButtonTab from '../../components/ButtonTab/ButtonTab';
import Card from '../../components/BurgerCard/BurgerCard' 
// import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { burgers } from '../../utils/data'


function BurgerIngredients({ onIngredientClick, selectedCounts }) {

    const [activeTab, setActiveTab] = useState('buns');
    // const list = ['Булки', 'Соусы', 'Начинки']

    const handleTabClick = (sectionId) => {
        setActiveTab(sectionId)
        document.getElementById(sectionId)?.scrollIntoView({ 
          behavior: 'smooth' 
        })
      }

    const ingredientsByType = {
        bun: burgers.filter(item => item.type === 'bun'),
        sauce: burgers.filter(item => item.type === 'sauce'),
        main: burgers.filter(item => item.type === 'main')
    }


    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Соберите бургер</h2>

            <nav className={styles.nav}>
        <ul className={styles.tabs}>
          <ButtonTab 
            active={activeTab === 'buns'}
            sectionId="buns"
            onClick={handleTabClick}
          >
            Булки
          </ButtonTab>

          <ButtonTab 
            active={activeTab === 'sauces'}
            sectionId="sauces"
            onClick={handleTabClick}
          >
            Соусы
          </ButtonTab>

          <ButtonTab 
            active={activeTab === 'mains'}
            sectionId="mains"
            onClick={handleTabClick}
          >
            Начинки
          </ButtonTab>
        </ul>
      </nav>

            <section id="buns" className={styles.category}>
                <h3 className={styles.subtitle}>Булки</h3>
                <div className={styles.grid}>
                    {ingredientsByType.bun.map(burger => (
                        <Card
                            key={burger._id}
                            src={burger.image}
                            name={burger.name}
                            price={burger.price}
                            onClick={() => onIngredientClick(burger)}
                            count={selectedCounts[burger._id] || 0}
                        />
                    ))}
                </div>
            </section>
            
            <section id="sauces" className={styles.category}>
                <h3 className={styles.subtitle}>Соусы</h3>
                <div className={styles.grid}>
                    {ingredientsByType.sauce.map(burger => (
                        <Card
                            key={burger._id}
                            src={burger.image}
                            name={burger.name}
                            price={burger.price}
                            onClick={() => onIngredientClick(burger)}
                            count={selectedCounts[burger._id] || 0}
                        />
                    ))}
                </div>
            </section>

            <section id="mains" className={styles.category}>
                <h3 className={styles.subtitle}>Начинки</h3>
                <div className={styles.grid}>
                    {ingredientsByType.main.map(burger => (
                        <Card
                            key={burger._id}
                            src={burger.image}
                            name={burger.name}
                            price={burger.price}
                            onClick={() => onIngredientClick(burger)}
                            count={selectedCounts[burger._id] || 0}
                        />
                    ))}
                </div>
            </section>

        </section>
    )
}

export default BurgerIngredients