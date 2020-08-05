import React, { useState } from "react"
import { navigate } from "gatsby"
import axios from "axios"
import styled from "styled-components"

const FormContainer = styled.form`
  input,
  button,
  select,
  optgroup,
  textarea {
    width: 100%;
    padding: 10px 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    height: 45px;
  }
  textarea {
    height: 90px;
  }
`

const Button = styled.button`
  background: #e86774;
  border: 0;
  height: 50px;
  color: #fff;
  font-weight: 500;
  width: 220px !important;
  font-size: 14px;
  transition: 0.3s all;

  :hover {
    background: #ff828e;
  }
`

const getformURL = "exampleurl"

const Contactform = props => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    axios({
      method: "post",
      url: getformURL,
      data: new FormData(form),
    })
      .then(response => {
        if (response.status === 200) {
          navigate("/success")
        } else {
          alert(
            "We could not send your message right now, please try again later."
          )
        }
      })
      .catch(error => {
        alert(
          "We could not send your message right now, please try again later."
        )
      })
  }
  return (
    <React.Fragment>
      <FormContainer onSubmit={handleOnSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            className="form-control"
            id="firstname"
            placeholder="Firstname"
            required="required"
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            className="form-control"
            id="lastname"
            placeholder="Lastname"
            required="required"
            maxLength="50"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            required="required"
          />
        </div>
        <div className="form-group">
          <textarea
            type="text"
            name="message"
            className="form-control"
            id="message"
            placeholder="Message"
            required="required"
            maxLength="500"
          />
        </div>

        <Button type="submit" disabled={serverState.submitting}>
          Submit
        </Button>
        {serverState.status && (
          <p className={!serverState.status.ok ? "errorMsg" : ""}>
            {serverState.status.msg}
          </p>
        )}
      </FormContainer>
    </React.Fragment>
  )
}

export default Contactform
