import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import generationService from '../Services/generationService';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function NavBar() {
    const [generation, setGeneration] = useState([]);

    const fetchGeneration = async () =>{
        try {
            const response = await generationService.getPokemonGeneration();
            setGeneration(response.data.results)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchGeneration()
    },[])
    const upperCase = (string) => {
      let strCopy = string.split("-")
      let startString = strCopy[0];
      let endString = strCopy[1].toUpperCase();
      return startString.charAt(0).toUpperCase()+startString.substring(1) + ' ' + endString

  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Pokedex</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Génération" id="generation">
                {generation.map(gen =>{
                    return <NavDropdown.Item key={gen.name} href={'/Generation/'+gen.name}>{upperCase(gen.name)}</ NavDropdown.Item>
                })}
            </NavDropdown>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Rechercher"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Rechercher</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;