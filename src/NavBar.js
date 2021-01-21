import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import './style/Navbar.css'


export default function NavBar() {
    return (
        <div>
            <Navbar bg="light" expand="md" fixed="top">
                <Container>
                    <Navbar.Brand href="#home"><img src="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://www.filepicker.io/api/file/AQCqx5hFT0bNbzcGstV1" height="35"></img></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Program" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://www.latihid.com/courses/category/LatihIDModul">LatihID Modul</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.latihid.com/courses/category/LatihIDTalks">LatihID Talks</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.latihid.com/p/peta">LatihID PETA</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.latihid.com/p/maju">LatihID MAJU</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="https://www.latihid.com/blog">Artikel</Nav.Link>
                            <Nav.Link href="https://www.latihid.com/p/tentangkami">Tentang Kami</Nav.Link>
                            <Nav.Link href="https://www.latihid.com/p/ayokolaborasi">Ayo Kolaborasi</Nav.Link>
                            <NavDropdown title="Bantuan" id="basic-nav-dropdown">
                                <NavDropdown.Item href="https://www.latihid.com/p/bantuan">FAQ</NavDropdown.Item>
                                <NavDropdown.Item href="https://www.latihid.com/p/contact">Kontat Kami</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    <Nav.Link href="https://www.latihid.com/sign_in">Masuk</Nav.Link>
                    <div className="banner-btn">
                        <a href="https://www.latihid.com/sign_up" >Daftar</a>
                    </div>
                </Container>
            </Navbar>
            <br />

        </div>
    );
}