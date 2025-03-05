import logo from '../assets/feliz-2025.png'
import S from './style.module.scss'

export default function Header(){
    return(
        <header>
            <img src={logo} alt="imagem da cidra de ano novo" />
            <nav className={S.boxMenu}>
                <ul>
                    <li>Paz</li>
                    <li>Saúde</li>
                    <li>Alegria</li>
                </ul>
            </nav>
        </header>
    )
}
