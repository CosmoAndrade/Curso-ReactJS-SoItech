import { DivHeader } from "./style";
import Logo from '../../assets/logo.png'

function Header() {
    return ( 
        <DivHeader>

           <img src={Logo}/>

        </DivHeader>
     );
}

export default Header;