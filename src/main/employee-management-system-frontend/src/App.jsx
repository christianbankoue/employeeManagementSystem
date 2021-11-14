import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployees from './components/ListEmployees';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import CreateEmployee from './components/CreateEmployee';
import ViewEmployee from './components/ViewEmployee';

function App() {
  
  return (
    <>
    <Router>
      <Header/>
        <Container>
            <Row>
              <Col lg={12} className={"margin-top"}>
              <Routes>
                <Route path="/" element={<ListEmployees />}/>
                <Route path="/employees" element={<ListEmployees />}/>
                <Route path="/add-employee/:id" element ={<CreateEmployee />}/>
                <Route path="/employees" element={<ListEmployees />}/>
                <Route path="/view-employee/:id" element={<ViewEmployee />} />
              </Routes> 
              </Col>
            </Row>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
