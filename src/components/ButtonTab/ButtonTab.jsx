// import styles from './BurgerIngredients.module.css'
import styles from './ButtonTab.module.css'

const ButtonTab = ({ 
  children, 
  active, 
  sectionId, 
  onClick 
}) => {
  return (
    <li className={`${styles.tab} ${active ? styles.active : ''}`}>
      <button
        onClick={() => onClick(sectionId)}
        className={`${styles.button} ${active ? styles.active : ''}`}
      >
        {children}
        {active && <div className={styles.activeLine} />}
      </button>
    </li>
  )
}

export default ButtonTab