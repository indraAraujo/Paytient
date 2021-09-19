import '../css/Dashboard.css';

//Componentes do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Icones do FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faExchangeAlt, faShoppingCart, faSortUp, faSortDown} from "@fortawesome/free-solid-svg-icons";
import { faUser} from "@fortawesome/free-regular-svg-icons";


export default function Dashboard(){
    return(
        <div className="Dashboard">
           
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
                            <div id="content_card"> 12.167.943</div>
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
            </Container>
            <div id="graph">
                
            </div>
        </div>
    )
}

/*
 <div className="Header">
                <Container>
                    <Row>
                        <Col sm={8} id="title">Indicadores</Col>
                        <Col sm={4} id="period">Período: Último 12 meses</Col>
                    </Row>
                </Container>
            </div>
*/