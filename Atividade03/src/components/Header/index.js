import { StyledHeader } from './style';
import './styles.css'

import Logo from '../../img/logo.png'




function Header() {
    return (
        <StyledHeader>

            <h2>
                <img src={Logo}></img>
            </h2>

            <nav>


                <ul>
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">VIAGENS</a></li>
                    <li><a href="#">SOBRE NÓS</a></li>
                    <li><a href="#">CONTATOS</a></li>
                   
                </ul>
            </nav>

        </StyledHeader>
    );
}

export default Header;