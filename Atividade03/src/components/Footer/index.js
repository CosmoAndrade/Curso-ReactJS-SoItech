import { SyledFooter } from './style';
import './styles.css'
import Logo from '../../img/logo.png'


function Footer() {
    return ( 
        <SyledFooter>

            
            
            <h3>Produzido Por ...</h3>

            <h2 >
                <img src={Logo}/>
            </h2>
            
            
        </SyledFooter>
     );
}

export default Footer;