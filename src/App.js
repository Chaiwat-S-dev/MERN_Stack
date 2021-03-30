import logo from './logo.svg';

import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter as Router, Switch, Route, link, Link } from 'react-router-dom';

import CreatStudent from './components/create-student.component';
import EditStudent from './components/edit-student.component';
import StudentList from './components/student-list.component';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">

        <NavBar bg="dark" variant="dark">
          <Container>

            <NavBar.Brand>
              <Link to={"/creat-student"} className="nav-link">
                React MERN Stack CRUD
              </Link>
            </NavBar.Brand>

            <Nav>
              <link to={"/creat-student"} className="nav-link">
                Create student
              </link>
            </Nav>

            <Nav>
              <link to={"/creat-student"} className="nav-link">
                Create student
              </link>
            </Nav>

          </Container>
        </NavBar>

        </header>

        <Container>
          <Row>
            <Col md="12">
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={CreatStudent} />
                  <Route path="/create-student" component={CreatStudent} />
                  <Route path="/edit-student/:id" component={EditStudent} />
                  <Route path="/student-list" component={StudentList} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
    
    </div>
    </Router>
  );
}

export default App;
