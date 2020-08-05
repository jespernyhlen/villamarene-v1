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
  @media (min-width: 1024px) {
    padding: 35px 0 20px;
  }
`

const ServiceCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 20px 20px;
  text-align: center;

  .gatsby-image-wrapper {
    margin: 0 auto;
    margin-bottom: 20px;
    width: 40px !important;
    height: 40px !important;
  }

  @media (min-width: 768px) {
    max-width: 50%;
    padding: 20px;
  }

  @media (min-width: 992px) {
    max-width: 30%;
  }
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
  h3 {
    margin-left: 18px;
    margin-bottom: 10px;
  }
`

const ServicesStacked = ({ serviceContent }) => {
  return (
    /************ Service Section ************/
    <Background>
      <ServiceContainer>
        {serviceContent.map(item => {
          return (
            <ServiceCard key={item.headline}>
              <CardHeader>
                <Img fixed={item.icon.fixed} />
                <h3>{item.headline}</h3>
              </CardHeader>
              <p>{item.text.text}</p>
            </ServiceCard>
          )
        })}
      </ServiceContainer>
    </Background>
  )
}

export default ServicesStacked
