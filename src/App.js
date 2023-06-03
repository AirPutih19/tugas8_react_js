import React, {Component} from "react";
import { Breadcrumb, Button, Carousel, Col, Container, Dropdown, Figure, Form, ListGroup, Row } from "react-bootstrap";
import Example from "./Example";
class App extends Component{

  render(){
    return(
      <Container fluid="xxl">
        <Row className="bg-dark" text="light" >
        <Col>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Pilih Bahasa
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Bahasa Indonesia</Dropdown.Item>
            <Dropdown.Item href="#/action-2">English</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Col>
        <Col></Col>
        <Col>
        <Figure>
          <Figure.Image src="https://png.pngtree.com/svg/20161113/ef1b24279e.png" width={75} height={75}/>
          <Figure.Caption className="text"><p className="text-light">Alan Saputra</p></Figure.Caption>
        </Figure>
        </Col>
        </Row>
        <Row>
          <Col xs={12} md={8}>
            
          </Col>
          <Col xs={6} md={4} className="bg-secondary-subtle ">
            <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/halaman-berita">Berita</Breadcrumb.Item>
            <Breadcrumb.Item href="/" active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
          </Row>
          <br/> 
          <Container>
          <Carousel>
            <Carousel.Item>
              <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600" alt="Berita 1"/>
              <Carousel.Caption>
              <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t=-1232521935&quality=60&w=1600"  alt="Berita 2"/>
              <Carousel.Caption>
              <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t=351764441&quality=60&w=1600"  alt="Berita 3"/>
              <Carousel.Caption>
              <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Container>
          
          <br/>
          <Row>
            <Col>
            <ListGroup>
              <ListGroup.Item active>Liga 1 Indonesia</ListGroup.Item>
              <ListGroup.Item>Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item>Divisi Primera</ListGroup.Item>
              <ListGroup.Item>Serie A</ListGroup.Item>
              <ListGroup.Item>Ligue 1</ListGroup.Item>
              <ListGroup.Item>Bundes Liga</ListGroup.Item>
            </ListGroup>
            </Col>
            <Col xs={6}>
            <div className="container-fluid">
        <div className="row align-item-center">
          <div className="col-11">
            <h1>DIVISI PRIMERA</h1>
            <p>Main Untuk Catalunya,Gerard Pique Minta Dihormati</p>
            <Button variant="primary">Read More</Button>

          </div>

        </div>
      </div>
            </Col>
            <Col>
            <img src="https://www.nicepng.com/png/detail/138-1388174_login-account-icon.png" alt="Login Account Icon@nicepng.com" width={150} height={100} className="rounded mx-auto d-block"/><br/>
            <Form>
             
              <h3 className="text-center">Silahkan Login</h3>
              <Form.Group>
              <Form.Control type="email" placeholder="Masukan email"/>
              </Form.Group>
              <Form.Group>
              <Form.Control type="password" placeholder="Password"/>
              </Form.Group>
              <br/>
              <Form.Group>
              <Form.Check type="checkbox" label="Term & Condition"/>
              </Form.Group>
              <br/>
              <Form.Group>
                <Example/>
              </Form.Group>



         

            </Form>
            </Col>
          </Row>
      </Container>
      
    );
  }
}

export default App;
