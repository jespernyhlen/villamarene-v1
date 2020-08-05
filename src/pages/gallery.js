import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import HeaderContent from "../components/headerContent"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Lightbox from "react-image-lightbox"
import "react-image-lightbox/style.css"

const SemiHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 0;

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

const GalleryContainer = styled.div`
  max-width: 2100px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;

  .gatsby-image-wrapper {
    height: 350px;
    width: 100%;
    transition: 0.3s;
    overflow: hidden;
  }
  .graphcms-image-outer-wrapper:hover {
    position: absolute;
  }
  .gatsby-image-wrapper {
    transition: 0.6s;
  }
  .gatsby-image-wrapper:hover {
    transform: scale(1.05);
    filter: brightness(0.7);
    cursor: pointer;
    z-index: 30;
  }

  @media (min-width: 1024px) {
    .gatsby-image-wrapper {
      height: 24.5vw;
    }
  }
`

const GalleryItem = styled.div`
  width: 100%;
  overflow: hidden;
  max-height: 500px;

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 24.75%;
    margin: 0.1vw;
  }
`

const Gallery = props => {
  const [images, setimages] = useState([])
  const [popupImages, setpopupImages] = useState([])
  const [photoIndex, setphotoIndex] = useState(0)
  const [isOpen, setisOpen] = useState(false)

  let pageContent = props.data.allContentfulGalleryPage.nodes[0]

  useEffect(() => {
    let resImages = []
    let tempPopupImages = []

    for (var image of pageContent.images) {
      resImages.push({
        fluid: image.fluid,
      })
      tempPopupImages.push(image.fluid.src)
    }

    setimages(resImages)
    setpopupImages(tempPopupImages)
  }, [pageContent.images])

  const galleryImages = images.map((image, index) => {
    return (
      <GalleryItem
        bottom
        key={"galleryitem" + index}
        className="gallery-item"
        onClick={() => {
          setisOpen(true)
          setphotoIndex(index)
        }}
      >
        <Img fluid={image.fluid} />
      </GalleryItem>
    )
  })

  return (
    <React.Fragment>
      {/************ Header Section ************/}
      <HeaderContent
        heading={pageContent.headlineBold}
        text={pageContent.headerText}
      />
      <SEO title="Photo Gallery - Villa Marene" />
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
          </PresentationContainer>
        </Wrapper>
      </section>
      {images.length ? (
        <GalleryContainer>{galleryImages}</GalleryContainer>
      ) : null}
      {isOpen ? (
        <Lightbox
          mainSrc={popupImages[photoIndex]}
          nextSrc={popupImages[(photoIndex + 1) % popupImages.length]}
          prevSrc={
            popupImages[
              (photoIndex + popupImages.length - 1) % popupImages.length
            ]
          }
          onCloseRequest={() => setisOpen(false)}
          onMovePrevRequest={() =>
            setphotoIndex(
              (photoIndex + popupImages.length - 1) % popupImages.length
            )
          }
          onMoveNextRequest={() =>
            setphotoIndex((photoIndex + 1) % popupImages.length)
          }
        />
      ) : null}
    </React.Fragment>
  )
}
export default Gallery

export const pageQuery = graphql`
  query GalleryQuery {
    allContentfulGalleryPage {
      nodes {
        headlineBold
        headlineThin
        headerText
        presentationHeadlineBold
        presentationHeadlineThin
        images {
          fluid(maxWidth: 800) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`
