import './Header.css'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import Button from '../../components/Button/Button'

function Header() {

    const btnValues = ['Конструктор', 'Лента заказы', 'Личный кабинет']

    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__button-block">
                        <Button 
                            icon={<BurgerIcon type='primary'/>}
                            description={btnValues[0]}    
                        />
                        <Button 
                            icon={<ListIcon type='secondary'/>}
                            description={btnValues[1]}                     
                        />
                    </div>
                    <Logo />
                    <Button 
                        icon={<ProfileIcon type='secondary'/>}
                        description={btnValues[2]}  
                    />
                </div>
            </div>
        </div>

    )   
}

export default Header