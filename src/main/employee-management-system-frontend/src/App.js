import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import "./App.css"

function App() {
  return (
    <>
    <Header/>
      <Container>
        <Row>
          <Col lg={12} className={"margin-top"}>
            <ListEmployee />
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
}

export default App;
