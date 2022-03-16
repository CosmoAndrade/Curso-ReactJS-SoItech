import { StyleBusca, StyledHeader } from './style';
import './styles.css'





function CampoBusca() {
    return (

        <StyleBusca>

            <div>
                <select>
                    <option>Viagem Azul</option>
                    <option>Viagem Verde</option>
                    <option>Viagem Laranja</option>
                    <option>Viagem Vermelho</option>
                </select>
            </div>

            <div>
                <input type={'search'} value="BUSCAR "  />
                
            </div>

        </StyleBusca>
       
    );
}

export default CampoBusca;