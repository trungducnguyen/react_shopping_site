import React from 'react';
import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';

function BottomHeader() {
    return(
        <div style={{marginBottom: '66px'}}>
            <Navbar bg="light" expand="lg" fixed="top" className=" pb-3">
        <Navbar.Brand href="/">
            <i id="logo" className="fal fa-store "></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <NavDropdown title="MEN" id="basic-nav-dropdown">
                    <NavDropdown.Item  href="/men/shoes">Shoes</NavDropdown.Item>
                    <NavDropdown.Item href="/men/clothing">Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="/men/accessories">Accessories</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="WOMEN" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/men/shoes">Shoes</NavDropdown.Item>
                    <NavDropdown.Item href="/men/clothing">Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="/men/accessories">Accessories</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="KIDS" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#kids/shoes">Shoes</NavDropdown.Item>
                    <NavDropdown.Item href="#kids/clothing">Clothing</NavDropdown.Item>
                    <NavDropdown.Item href="#kids/accessories">Accessories</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#customise">CUSTOMISE</Nav.Link>
                <Nav.Link href="#launch">SNKR LAUNCH CALENDAR</Nav.Link>
                <Nav.Link href="#sale">SALE</Nav.Link>
                <Nav.Link href="/cart">CART</Nav.Link>
                <Nav.Link href="/sign-in"><i class="fas fa-user-circle"></i></Nav.Link>
            </Nav>
            <Form inline>
                <FormControl id ="search-expand" type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-secondary">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
        </div>
    )
}

export default BottomHeader