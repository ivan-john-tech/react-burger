import button from './Button.module.css'
// import {BurgerIcon, ListIcon, Logo, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'

function Button(props) {
    return (
        <button className={button.btn}>
            {props.icon}
            <span>{props.description}</span>
        </button>
    )
}

export default Button