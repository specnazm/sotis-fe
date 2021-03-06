import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { HOME, COURSES } from '../../routes';

const StudentNavbar = () => {
    const profile = (<span className="glyphicon glyphicon-user fa-lg"></span>);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" style={{margin: 0}} >
            <Container>
                <Navbar.Brand href={HOME}>
                    <img
                        src="/logo.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href={HOME}>Home</Nav.Link>
                    <Nav.Link href={COURSES}>Courses</Nav.Link>
                </Nav>
                <Nav>
                    <NavDropdown title={profile} id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default StudentNavbar;