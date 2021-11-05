import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <Router>
      <Header/>
        <Container>
            <Row>
              <Col lg={12} className={"margin-top"}>
              <Routes>
                <Route path="/" element={<ListEmployee/>} ></Route>
                <Route path="/employees" element={<ListEmployee/>}></Route>
              </Routes> 
              {/* <ListEmployee /> */}
              </Col>
            </Row>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
