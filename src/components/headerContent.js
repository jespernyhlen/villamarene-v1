import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.section`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: 0;
  z-index: 10;
  color: #fff;
  text-align: center;
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding: 0 30px;
  }

  h1 {
    letter-spacing: 1px;
    font-size: 36px;
  }

  span {
    font-weight: 300;
    color: #dddddd;
  }

  p {
    font-size: 12px;
    color: #ddd;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    height: 60vh;

    p {
      font-size: 16px;
      letter-spacing: 1px;
    }
  }
`

const HeaderContent = props => {
  return (
    <HeaderContainer>
      <div>
        <h1>{props.heading}</h1>
        <p>{props.text}</p>
      </div>
    </HeaderContainer>
  )
}

export default HeaderContent
