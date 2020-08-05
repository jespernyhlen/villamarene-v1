import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Background = styled.div`
  background: #fafafa;
`

const ServiceContainer = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 60px 0 40px;
  background: #fcfcfc;
`

const ServiceCard = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px 20px;

  .gatsby-image-wrapper {
    min-width: 30px;
  }

  @media (min-width: 667px) {
    width: 40%;
    padding: 20px;
  }

  @media (min-width: 768px) {
    width: 30%;
    padding: 20px;
  }
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  h3 {
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }
`

const Services = ({ serviceContent }) => {
  return (
    /************ Service Section ************/
    <Background>
      <ServiceContainer>
        {serviceContent.map(item => {
          return (
            <ServiceCard key={item.headline}>
              <Img fixed={item.icon.fixed} />

              <CardHeader>
                <h3>{item.headline}</h3>

                <p>{item.text.text}</p>
              </CardHeader>
            </ServiceCard>
          )
        })}
      </ServiceContainer>
    </Background>
  )
}

export default Services
