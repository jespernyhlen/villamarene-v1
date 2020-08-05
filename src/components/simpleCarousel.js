import React from "react"
import Carousel from "react-multi-carousel"
import { Image } from "semantic-ui-react"
import styled from "styled-components"

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 50,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
}

const SimpleCarousel = ({ deviceType, images }) => {
  return (
    <CarouselContainer>
      <Carousel
        ssr
        partialVisible
        deviceType={deviceType}
        itemClass="image-item"
        responsive={responsive}
      >
        {images.slice(0, 5).map(image => {
          return (
            <Image
              key={image.src}
              style={{ width: "100%", height: "100%" }}
              src={image.fluid.src}
            />
          )
        })}
      </Carousel>
    </CarouselContainer>
  )
}

export default SimpleCarousel

const CarouselContainer = styled.div`
  #__next {
    padding: 20px;
  }
  .image-item {
    padding: 20px 0 20px 20px !important;
  }
`
