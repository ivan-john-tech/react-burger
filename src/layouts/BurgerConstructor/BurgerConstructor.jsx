import styles from './BurgerConstructor.module.css'
import BurgerComponent from '../../components/BurgerComponent/BurgerComponent'

function BurgerConstructor({ ingredients, onIngredientRemove }) {

    const totalPrice = ingredients.reduce((sum, item) => sum + item.price, 0);
    const isEmpty = ingredients.length === 0;

    return (
        <section className={styles.section}>
             {isEmpty ? (
                    <div className={styles.empty}>
                        <p className={styles.emptyText}>
                            Пожалуйста, выберите булку
                        </p>
                    </div>
                ) : (
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    {ingredients.map(item => (
                        <BurgerComponent 
                        key={item._id}
                        src={item.image}
                        name={item.name}
                        price={item.price}
                        type={item.type}
                        onDelete={() => onIngredientRemove(item._id)}
                        />
                    ))}
                </ul>
            </nav>)}

            <div className={styles.total}>
                <span className={styles.sum}>{totalPrice}</span>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9265 3.15561C16.1234 2.68894 15.5814 2.25899 15.1718 2.55689L1.91184 12.2005C1.6531 12.3887 1.50001 12.6893 1.50001 13.0092V20.3995C1.50001 20.6099 1.63171 20.7978 1.82948 20.8695L6.68112 22.6298C7.1816 22.8113 7.73659 22.5689 7.94354 22.0784L15.9265 3.15561Z" fill="#F2F2F3" />
                <path d="M2.18083 23.7641C1.85312 23.637 1.50001 23.8787 1.50001 24.2302L1.5 24.6005C1.5 24.7715 1.58734 24.9306 1.73156 25.0224L15.7724 33.9574C15.8743 34.0223 15.9824 33.8844 15.8952 33.8008L7.76629 26.0129C7.67116 25.9217 7.55896 25.8503 7.43614 25.8027L2.18083 23.7641Z" fill="#F2F2F3" />
                <path d="M20.1048 33.8008C20.0176 33.8844 20.1257 34.0223 20.2277 33.9574L34.2684 25.0224C34.4127 24.9306 34.5 24.7715 34.5 24.6005V24.2303C34.5 23.8788 34.1469 23.637 33.8192 23.7641L28.5639 25.8027C28.4411 25.8503 28.3289 25.9217 28.2337 26.0129L20.1048 33.8008Z" fill="#F2F2F3" />
                <path d="M34.1705 20.8695C34.3683 20.7978 34.5 20.6099 34.5 20.3995V13.0092C34.5 12.6893 34.3469 12.3887 34.0882 12.2005L20.8282 2.55689C20.4186 2.25899 19.8766 2.68895 20.0735 3.15561L28.0565 22.0784C28.2634 22.5689 28.8184 22.8113 29.3189 22.6298L34.1705 20.8695Z" fill="#F2F2F3" />
                <path d="M18.7142 31.8067C18.3221 32.2068 17.6779 32.2068 17.2858 31.8067L10.433 24.814C10.1573 24.5327 10.0725 24.1158 10.2162 23.7491L17.069 6.26753C17.4009 5.42082 18.5991 5.42082 18.931 6.26753L25.7838 23.7491C25.9276 24.1158 25.8427 24.5327 25.567 24.814L18.7142 31.8067Z" fill="#F2F2F3" />
                </svg>
                <button className={styles.btnOrder}>Оформить заказ</button>
            </div>

        </section>
    )
}

export default BurgerConstructor