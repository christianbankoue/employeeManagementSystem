import { Col, Container, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import ListEmployee from './components/ListEmployee';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import CreateEmployee from './components/CreateEmployee';

function App() {
  
  return (
    <>
    <Router>
      <Header/>
        <Container>
            <Row>
              <Col lg={12} className={"margin-top"}>
              <Switch>
                <Route path="/" component={ListEmployee}/>
                <Route path="/employees" component={ListEmployee}/>
                <Route path="/add-employee" component={CreateEmployee}/>
              </Switch> 
              </Col>
            </Row>
        </Container>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
