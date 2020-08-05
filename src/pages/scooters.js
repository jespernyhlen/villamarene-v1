import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import HeaderContent from "../components/headerContent"
import ServicesStacked from "../components/servicesStacked"
import SEO from "../components/seo"

const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const HeaderThin = styled.span`
  font-weight: 400;
`

const SemiHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;

  span {
    font-weight: 400;
  }
`

const PresentationContainer = styled.div`
  margin: 80px 20px;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 100px 20px;
  }
`

const BackgroundContainer = styled.div`
  position: relative;
  color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 0;

  @media (min-width: 768px) {
  }
`

const TextContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 20px;

  p {
    color: #eee;
  }

  h2 {
    color: #fff;
  }
`

const Pretext = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #777;
  letter-spacing: 1px;
  margin-bottom: 10px;
`

const InformationContainer = styled.div`
  margin: 100px 20px;

  @media (min-width: 768px) {
    max-width: 700px;
  }
`

const BoldText = styled.p`
  font-weight: 600;
  color: #222222;
`

const Scooters = props => {
  let pageContent = props.data.allContentfulScooterPage.nodes[0]

  return (
    <React.Fragment>
      {/************ Header Section ************/}
      <HeaderContent
        heading={pageContent.headerHeadlineBold}
        text={pageContent.headerText}
      />
      <SEO title="Scooter rental - Villa Marene" />

      {/************ Presentation Section ************/}
      <section
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        <Wrapper>
          <PresentationContainer>
            <SemiHeader>
              {pageContent.presentationHeadlineBold + " "}
              <HeaderThin>{pageContent.presentationHeadlineThin}</HeaderThin>
            </SemiHeader>
            <p>{pageContent.presentationText.presentationText}</p>
          </PresentationContainer>
        </Wrapper>
      </section>
      {/************ Background Section ************/}
      <section>
        <BackgroundContainer
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7, 26, 24, 0.7), rgba(0, 10, 10, 0.6), rgba(59, 22, 0, 0.5)), url(https:" +
              pageContent.bgImgImage.fluid.src +
              ")",
          }}
        >
          <Wrapper
            data-sal="slide-up"
            data-sal-easing="ease"
            data-sal-duration="800"
          >
            <TextContent className="bg-color">
              <Pretext>{pageContent.bgImgPretext}</Pretext>
              <SemiHeader>
                <span>{pageContent.bgImgHeadlineBold + " "}</span>
                {pageContent.bgImgHeadlineThin}
              </SemiHeader>
              <p>{pageContent.bgImgText.bgImgText}</p>
              <BoldText>{pageContent.bgImgPrices}</BoldText>
            </TextContent>
          </Wrapper>
        </BackgroundContainer>
      </section>

      {/************ Information Section ************/}
      <section
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        <Wrapper>
          <InformationContainer>
            <SemiHeader>{pageContent.informationHeadline}</SemiHeader>
            <BoldText>{pageContent.informationText.informationText}</BoldText>
            <BoldText>{pageContent.informationPrices}</BoldText>
            <p>{pageContent.informationAfterText.informationAfterText}</p>
          </InformationContainer>
        </Wrapper>
      </section>
      {/************ Features Section ************/}
      <section>
        <ServicesStacked serviceContent={pageContent.features} />
      </section>
    </React.Fragment>
  )
}

export default Scooters

export const pageQuery = graphql`
  query ScooterQuery {
    allContentfulScooterPage {
      nodes {
        headerHeadlineBold
        headerHeadlineThin
        headerText
        presentationHeadlineBold
        presentationHeadlineThin
        presentationText {
          presentationText
        }
        bgImgHeadlineBold
        bgImgHeadlineThin
        bgImgText {
          bgImgText
        }
        bgImgPrices
        bgImgImage {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
        features {
          headline
          text {
            text
          }
          icon {
            fixed(width: 30) {
              ...GatsbyContentfulFixed
            }
          }
        }
        informationHeadline
        informationText {
          informationText
        }
        informationPrices
        informationAfterText {
          informationAfterText
        }
      }
    }
  }
`
