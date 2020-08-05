import React, { useState, useEffect, useCallback } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import NavbarLinks from "./navbarLinks"
import Logo from "./logo"

const Navigation = styled.nav`
  width: 100%;
  background-color: transparent;
  position: absolute;

  z-index: 20;
  transition: all 0.25s ease-in-out;

  &.nav-scrolled {
    height: 60px;

    @media (max-width: 768px) {
    }
    .inner-nav {
      height: 60px;
    }
  }

  .inner-nav {
    height: 100px;
    max-width: 1260px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 30px;
    z-index: 15;
    align-self: center;
    transition: all 0.25s ease-in-out;

    @media (max-width: 768px) {
      top: 0;
      left: 0;
      right: 0;
      left: 0;
    }
  }
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 0 0 10vw;

  @media (max-width: 768px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100vh;
    justify-content: center;
    padding-top: 10vh;
    padding-bottom: 10vh;
    background-color: #0a0a0ae8;
    transition: all 0.3s ease-in;
    left: ${props => (props.open ? "-100%" : "0")};
    box-shadow: 0 1px 100px rgba(0, 0, 0, 0.3);
    z-index: -1;
  }
`

const Hamburger = styled.div`
  background-color: #fff;
  width: 20px;
  height: 2px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 20px;
    height: 2px;
    background-color: #fff;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-6px, 0px)" : "rotate(0deg)"};
    top: -6px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 6px;
  }
`

const LogoText = styled(Link)`
  flex: auto;
  margin: auto 0;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  transition: all 200ms ease-in;
  font-family: "Lato", sans-serif !important;

  :hover {
    color: #fff;
    text-decoration: none;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const [position, setPosition] = useState(
    typeof window !== `undefined` ? window.pageYOffset : null
  )
  const [visible, setVisible] = useState(true)

  const handleScroll = useCallback(() => {
    let topPosition = window.scrollY < 100
    let currentPosition = window.pageYOffset
    let navbarElement = document.getElementsByTagName("nav")

    if (topPosition === isTop) {
      navbarElement[0].classList.remove("nav-scrolled")
    } else {
      navbarElement[0].classList.add("nav-scrolled")
      setIsTop(false)
    }

    setPosition(currentPosition)
    setVisible(position > currentPosition)
  }, [isTop, position])

  const addScrollEffect = () => {
    document.body.classList.toggle("no-scroll")
    document
      .getElementsByClassName("inner-nav")[0]
      .classList.toggle("no-scroll")
  }

  const removeScrollEffect = () => {
    document.body.classList.remove("no-scroll")
    document
      .getElementsByClassName("inner-nav")[0]
      .classList.remove("no-scroll")
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      removeScrollEffect()
    }
  }, [handleScroll])

  return (
    <Navigation
      className={
        visible || isTop ? (!isTop ? "outer-nav not-top" : "outer-nav") : ""
      }
    >
      <div className={"inner-nav"}>
        <Logo />
        <LogoText to="/">VILLA MARENE</LogoText>
        <Toggle
          navbarOpen={navbarOpen}
          onClick={() => {
            addScrollEffect()
            setNavbarOpen(!navbarOpen)
          }}
        >
          {navbarOpen ? <Hamburger open /> : <Hamburger />}
        </Toggle>
        {navbarOpen ? (
          <Navbox>
            <NavbarLinks />
          </Navbox>
        ) : (
          <Navbox open>
            <NavbarLinks />
          </Navbox>
        )}
      </div>
    </Navigation>
  )
}

export default Navbar
