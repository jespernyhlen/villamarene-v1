import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import HeaderContent from "../components/headerContent"
import Img from "gatsby-image"
import Contactform from "../components/contactform"
import SEO from "../components/seo"

const Wrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  flex-direction: column;

  @media (min-width: 1024px) {
    max-width: 1260px;
    flex-direction: row;
  }
`

const HeaderThin = styled.span`
  font-weight: 400;
`

const SemiHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`

const PresentationContainer = styled.div`
  margin: 80px 20px 100px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 100px auto;
  }
`

const ContactContainer = styled.div`
  padding: 60px 20px;
  background: #fcfcfc;

  @media (min-width: 768px) {
    padding: 120px 20px;
  }
`
const FormContainer = styled.div`
  max-width: 600px;

  @media (min-width: 1024px) {
    margin: 0 20px;
  }
`

const SideFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
  @media (min-width: 1024px) {
    margin-left: 20px;
  }

  .flex {
    display: flex;

    h5 {
      margin-bottom: 5px;
    }

    div:nth-child(2) {
      margin-left: 20px;
    }
  }
`

const Contact = props => {
  let pageContent = props.data.contentfulContactPage

  let contactIcons = {
    emailIcon: props.data.emailIcon.childImageSharp.fixed,
    phoneIcon: props.data.phoneIcon.childImageSharp.fixed,
    locationIcon: props.data.locationIcon.childImageSharp.fixed,
  }

  return (
    <React.Fragment>
      {/************ Header Section ************/}
      <HeaderContent
        heading={pageContent.headerHeadlineBold}
        text={pageContent.headerText}
      />
      <SEO title="Contact - Villa Marene" />
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
            <SideFormContainer>
              <div className="flex">
                <div>
                  <Img fixed={contactIcons.emailIcon} />
                </div>
                <div>
                  <h5>Email</h5>
                  <p>{pageContent.email}</p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <Img fixed={contactIcons.phoneIcon} />
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>{pageContent.phone}</p>
                </div>
              </div>
              <div className="flex">
                <div>
                  <Img fixed={contactIcons.locationIcon} />
                </div>
                <div>
                  <h5>Address</h5>
                  <p>{pageContent.address.address}</p>
                </div>
              </div>
            </SideFormContainer>
          </Wrapper>
        </ContactContainer>
      </section>
    </React.Fragment>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactQuery {
    contentfulContactPage {
      headerHeadlineBold
      headerHeadlineThin
      headerText
      presentationHeadlineBold
      presentationHeadlineThin
      presentationText {
        presentationText
      }
      contactHeadline
      contactText {
        contactText
      }
      email
      phone
      address {
        address
      }
    }
    emailIcon: file(relativePath: { eq: "mail.png" }) {
      childImageSharp {
        fixed(width: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    phoneIcon: file(relativePath: { eq: "phone.png" }) {
      childImageSharp {
        fixed(width: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    locationIcon: file(relativePath: { eq: "location.png" }) {
      childImageSharp {
        fixed(width: 20, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
