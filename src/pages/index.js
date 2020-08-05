import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import HeaderContent from "../components/headerContent"
import Article from "../components/article"
import Contactform from "../components/contactform"
import SEO from "../components/seo"

const Pretext = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #777;
  letter-spacing: 1px;
  margin-bottom: 10px;
`

const SemiHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;

  span {
    font-weight: 400;
  }
`

const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PresentationContainer = styled.div`
  margin: 80px 20px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 100px auto;
  }
`

const BackgroundContainer = styled.div`
  position: relative;
  color: red;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 120px 0;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    margin: 120px auto;
  }
`

const TextContent = styled.div`
  max-width: 600px;
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

const ContactContainer = styled.div`
  padding: 60px 0;
  background: #fcfcfc;

  @media (min-width: 768px) {
    padding: 120px 20px;
  }
`
const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 20px;

  @media (min-width: 1024px) {
    margin: 0;
    padding: 0 20px;
  }
`

const Home = props => {
  let pageContent = props.data.allContentfulHomePage.edges[0].node

  return (
    <React.Fragment>
      {/************ Header Section ************/}
      <HeaderContent
        heading={pageContent.headerHeading}
        text={pageContent.headerText}
      />
      <SEO title="Home - Villa Marene" />
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
              <span>{pageContent.presentationHeadlineThin}</span>
            </SemiHeader>
            <p>{pageContent.presentationText.presentationText}</p>
          </PresentationContainer>
        </Wrapper>
      </section>
      {/************ Article Section ************/}
      <section
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        {/* <Article pageContent={pageContent} imgLeft={true} /> */}
        <Article
          pageContent={{
            image: pageContent.articleFirstImage,
            pretext: pageContent.articleFirstPretext,
            headlineBold: pageContent.articleFirstHeadlineBold,
            headlineThin: pageContent.articleFirstHeadlineThin,
            text: pageContent.articleFirstText.articleFirstText,
          }}
          imgLeft={true}
        />
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
          <Wrapper>
            <TextContent
              data-sal="slide-up"
              data-sal-easing="ease"
              data-sal-duration="800"
              className="bg-color"
            >
              <Pretext>{pageContent.bgImgPretext}</Pretext>
              <SemiHeader>
                {pageContent.bgImgHeadlineBold + " "}
                <span>{pageContent.bgImgHeadlineThin}</span>
              </SemiHeader>
              <p>{pageContent.bgImgText.bgImgText}</p>
            </TextContent>
          </Wrapper>
        </BackgroundContainer>
      </section>
      {/************ Article Section ************/}
      <section
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        <Article
          pageContent={{
            image: pageContent.articleSecondImage,
            pretext: pageContent.articleSecondPretext,
            headlineBold: pageContent.articleSecondHeadlineBold,
            headlineThin: pageContent.articleSecondHeadlineThin,
            text: pageContent.articleSecondText.articleSecondText,
          }}
          imgLeft={false}
        />
      </section>
      {/************ Contact Section ************/}
      <section>
        <ContactContainer>
          <Wrapper>
            <FormContainer>
              <div>
                <SemiHeader>{pageContent.contactHeadline}</SemiHeader>
                <p>{pageContent.contactText.contactText}</p>
              </div>
              <div>
                <Contactform />
              </div>
            </FormContainer>
          </Wrapper>
        </ContactContainer>
      </section>
    </React.Fragment>
  )
}

export default Home

export const pageQuery = graphql`
  query HomePageQuery {
    allContentfulHomePage {
      edges {
        node {
          headerHeading
          headerText
          presentationHeadlineBold
          presentationHeadlineThin
          presentationText {
            presentationText
          }
          articleFirstHeadlineBold
          articleFirstHeadlineThin
          articleFirstPretext
          articleFirstText {
            articleFirstText
          }
          articleFirstImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          articleSecondHeadlineBold
          articleSecondHeadlineThin
          articleSecondPretext
          articleSecondText {
            articleSecondText
          }
          articleSecondImage {
            fluid(maxWidth: 800) {
              ...GatsbyContentfulFluid
            }
          }
          bgImgHeadlineBold
          bgImgHeadlineThin
          bgImgPretext
          bgImgText {
            bgImgText
          }
          bgImgImage {
            fluid(maxWidth: 1000) {
              ...GatsbyContentfulFluid
            }
          }
          contactHeadline
          contactText {
            contactText
          }
        }
      }
    }
    allContentfulHeaderImages {
      nodes {
        images {
          id
          title
          sizes {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }
`
