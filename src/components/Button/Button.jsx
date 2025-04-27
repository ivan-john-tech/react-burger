import styles from './Button.module.css'

function Button({ icon, description, isActive, onClick }) {
    return (
        <button 
            className={`${styles.btn} ${isActive ? styles.active : ''}`} 
            onClick={onClick}
        >
            {icon}
            <span>{description}</span>
        </button>
    )
}
export default Button