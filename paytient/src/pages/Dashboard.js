/*
* Componente para a página Dashboard
*/
import '../css/Dashboard.css';

//Componentes do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Imagem do gráfico
import graph from '../assets/graph.png';

//Icones do FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faExchangeAlt, faShoppingCart, faSortUp, faSortDown} from "@fortawesome/free-solid-svg-icons";
import { faUser} from "@fortawesome/free-regular-svg-icons";

export default function Dashboard(){
    return(
        <div className="Dashboard">
            {/*Texto titulo da página */}
            <Container id="header_dashboard">
                    <div id="title_header">Indicadores</div>
                    <div id="time_header">Período: Últimos 12 meses</div>
            </Container>
            {/*Cards com os valores */}
            <Container id="container">
                <Row id="row">
                    <Col md id="col">
                        <div className="Card">
                            <div id="header_card">
                                <FontAwesomeIcon  icon={faShoppingCart} id="cart_icon"/>
                                <div id="title_card">Vendas </div>
                            </div>
                            <div id="content_card"> 245</div>
                            <div id="footer_card"> 
                                <FontAwesomeIcon  icon={faSortUp} id="up_icon"/>
                                <div id="text_card">16,67%</div>
                            </div>
                        </div>    
                    </Col>
                    <Col  md id="col">
                        <div className="Card">
                            <div id="header_card">
                                <FontAwesomeIcon  icon={faDollarSign} id="sales_icon"/>
                                <div id="title_card"> Faturamento</div>
                            </div>
                            <div id="faturamento_adjustment">
                                <h id="faturamento_money">R$</h>
                                <div id="faturamento_price">12.167.943</div>
                            </div>
                            <div id="footer_card"> 
                                <FontAwesomeIcon  icon={faSortUp} id="up_icon"/>
                                <div id="text_card">4,67%</div>
                            </div>
                        </div>    
                    </Col>
                    <Col md id="col">
                        <div className="Card">
                            <div id="header_card">
                                <FontAwesomeIcon  icon={faExchangeAlt} id="exchange_icon"/>
                                <div id="title_card"> Conversão </div>
                            </div>
                            <div id="content_card">12%</div>
                            <div id="footer_card"> 
                                <FontAwesomeIcon  icon={faSortDown} id="down_icon"/>
                                <div id="text_card">21,67%</div>
                            </div>
                        </div>    
                    </Col>
                    <Col md id="col">
                        <div className="Card">
                            <div id="header_card">
                                <FontAwesomeIcon  icon={faUser} id="user_icon"/>
                                <div id="title_card">Leads</div>
                            </div>
                            <div id="content_card"> </div>
                            <div id="footer_card"> 
                                <div id="text_card"></div>
                            </div>
                        </div>    
                    </Col>
                </Row>
                {/*Gráfico (simulação através de uma imagem) */}
                <div className="Graph">
                    <div id="graph_header">
                        <FontAwesomeIcon  icon={faDollarSign} id="sales_icon"/>
                        <div id="graph_title"> Faturamento vs Custo Fixo</div>
                    </div>
                    <img src={graph} alt="graph_picture" id="graph_picture"/>
                </div>
            </Container>
            
        </div>
    )
}
