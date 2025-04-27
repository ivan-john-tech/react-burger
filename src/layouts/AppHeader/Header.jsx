import './Header.css'
import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import Button from '../../components/Button/Button'
import { useState } from 'react'

function Header({ onTabClick }) {
    const [activeIndex, setActiveIndex] = useState()
    const btnValues = ['Конструктор', 'Лента заказов', 'Личный кабинет']

    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">
                    <div className="header__button-block">
                        <Button 
                            icon={<BurgerIcon type={activeIndex === 0 ? 'primary' : 'secondary'}/>}
                            description={btnValues[0]}    
                            isActive={activeIndex === 0}
                            onClick={() => {
                                setActiveIndex(0);
                                onTabClick()
                            }}
                        />
                        <Button 
                            icon={<ListIcon type={activeIndex === 1 ? 'primary' : 'secondary'}/>}
                            description={btnValues[1]}   
                            isActive={activeIndex === 1}
                            onClick={() => setActiveIndex(1)}                  
                        />
                    </div>
                    <Logo />
                    <Button 
                        icon={<ProfileIcon type={activeIndex === 2 ? 'primary' : 'secondary'}/>}
                        description={btnValues[2]}  
                        isActive={activeIndex === 2}
                        onClick={() => setActiveIndex(2)}
                    />
                </div>
            </div>
        </div>

    )   
}

export default Header