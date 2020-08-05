import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import HeaderContent from "../components/headerContent"
import Services from "../components/services"
import Room from "../components/room"
import SEO from "../components/seo"

import "react-image-lightbox/style.css" // This only needs to be imported once in your app
import "react-multi-carousel/lib/styles.css"

const HeaderThin = styled.span`
  font-weight: 400;
`

const SemiHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`

const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const PresentationContainer = styled.div`
  margin: 80px 20px 100px;
  text-align: center;

  @media (min-width: 768px) {
    max-width: 700px;
    margin: 100px auto;
  }
`

const Rooms = props => {
  let pageContent = props.data.allContentfulRoomsPage.nodes[0]

  return (
    <React.Fragment>
      {/************ Header Section ************/}
      <HeaderContent
        heading={pageContent.headerHeadlineBold}
        text={pageContent.headerText}
      />
      <SEO title="Rooms - Villa Marene" />
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
      {/************ Services Section ************/}
      <section>
        <Services serviceContent={pageContent.services} />
      </section>
      {/************ Room Section ************/}
      <section>
        {pageContent.rooms.map(item => {
          return (
            <Room
              roomContent={{
                headlinebold: item.headlineBold,
                headlinethin: item.headlineThin,
                pretext: item.pretext.pretext,
                text: item.text.text,
                prices: item.prices,
                images: item.images,
              }}
            />
          )
        })}
      </section>
    </React.Fragment>
  )
}

export default Rooms

export const pageQuery = graphql`
  query RoomsQuery {
    allContentfulRoomsPage {
      nodes {
        headerHeadlineBold
        headerHeadlineThin
        headerText
        presentationHeadlineBold
        presentationHeadlineThin
        presentationText {
          presentationText
        }
        services {
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
        rooms {
          headlineBold
          headlineThin
          pretext {
            pretext
          }
          text {
            text
          }
          prices
          images {
            fluid {
              base64
              srcSet
              src
              sizes
            }
            file {
              fileName
            }
            id
          }
        }
      }
    }
  }
`
