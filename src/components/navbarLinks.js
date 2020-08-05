import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  font-size: 16px;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 0.2s ease-in;
  position: relative;

  &[aria-current] {
    color: #fff;
  }

  :hover {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/rooms">Rooms</NavItem>
      <NavItem to="/gallery">Gallery</NavItem>
      <NavItem to="/scooters">Scooters</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </>
  )
}

export default NavbarLinks
