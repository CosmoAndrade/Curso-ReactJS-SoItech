import { BtnCard, Card, StyleCardContainer } from './style';
import './styles.css'

import CarImg1 from '../../img/img01.png'
import CarImg2 from '../../img/img02.png'
import CarImg3 from '../../img/img03.png'
import CarImg4 from '../../img/img04.png'



function CardContainer() {
    return (

        <StyleCardContainer>



            <Card>
                <img src={CarImg1} />
                <p>Isso é uma descrição <br />
                    sobre a viagem
                </p>
                <BtnCard background="#AA543F">QUERO VIAJAR</BtnCard>
            </Card>

            
            <Card>
                <img src={CarImg2} />
                <p>Isso é uma descrição <br />
                    sobre a viagem
                </p>
                <BtnCard background="#30549A">QUERO VIAJAR</BtnCard>
            </Card>

            
            <Card>
                <img src={CarImg3} />
                <p>Isso é uma descrição <br />
                    sobre a viagem
                </p>
                <BtnCard background="#394B27">QUERO VIAJAR</BtnCard>
            </Card>

            
            <Card>
                <img src={CarImg4} />
                <p>Isso é uma descrição <br />
                    sobre a viagem
                </p>
                <BtnCard background="#D5A9A1">QUERO VIAJAR</BtnCard>
            </Card>

        </StyleCardContainer>

    );
}

export default CardContainer;