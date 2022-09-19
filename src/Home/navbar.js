import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function MyNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
  {/* <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
    </NavbarBrand>
  </Navbar> */}
  {/* <Navbar
    className="my-2"
    color="secondary"
    dark
  >
    <NavbarBrand href="/">
      Reactstrap
    </NavbarBrand>
  </Navbar> */}
  {/* <Navbar
    className="my-2"
    color="dark"
    dark
  >
    <NavbarBrand href="/">
      <img
        alt="logo"
        src="/logo-white.svg"
        style={{
          height: 40,
          width: 40
        }}
      />
      Reactstrap
    </NavbarBrand>
  </Navbar> */}
   <div >
      <Navbar {...args}>
        <NavbarBrand style={{fontSize: '2rem',color:"darkblue"}} href="/">MEDIHELP</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/Home/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Appointment/">Appointment</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Login/">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Register/">New user?</NavLink>
            </NavItem>
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Services
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Dermatologist</DropdownItem>
                <DropdownItem>Cardiologist  </DropdownItem>
                <DropdownItem>ENT Specialist  </DropdownItem>
                <DropdownItem>Neurologist   </DropdownItem>
                <DropdownItem>Therapist   </DropdownItem>
                <DropdownItem>Psychologist   </DropdownItem>
                <DropdownItem>Dentist    </DropdownItem>
                <DropdownItem divider />
                {/* <DropdownItem>Reset</DropdownItem> */}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Stay Healthy</NavbarText>
        </Collapse>
      </Navbar>
    </div>
</>

  );
}

export default MyNavbar