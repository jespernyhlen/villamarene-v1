import React, {Link} from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0;
  padding: 0;
  background: #fff;
  height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100vh - 80px);
  h1 {
    margin-bottom: 30px;
    font-size: 36px !important;
  }
  p {
    margin-bottom: 30px;
    font-size: 13px;
    line-height: 26px;
    color: #222;
    letter-spacing: 1px;
  }
  h1,
  p,
  .btn {
    letter-spacing: 1px;
  }
  .message__container {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    align-items: center;
    margin: 0 auto;
  }
  a {
    color: #000;
    text-decoration: none;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
  }

  .btn-home {
    cursor: pointer;
    :hover {
      color: #666;
    }
  }
  .site__logo__container {
    height: 80px;
    max-width: 1260px;
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    margin: 0 auto;
  }
`

const redirectURL

const Success = props => {
  return (
    <Container>
      <div>
        <div className="message__container">
          <h1>Message sent.</h1>
          <p>
            Thanks for reaching out to us. <br />
            We will come back to you as soon as possible.
          </p>
          <Link to="/" className="btn-home">
            Back to Villa Marene
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Success
