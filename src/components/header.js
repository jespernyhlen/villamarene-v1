import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import React, { useState, Fragment } from "react"
import "bootstrap/dist/css/bootstrap.css"
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap"

const BackgroundContainer = styled.div`
  color: red;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  @media (min-width: 768px) {
    height: 60vh;
  }
`

const Header = props => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const data = useStaticQuery(graphql`
    query HeaderQuery {
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
  `)

  let items = data.allContentfulHeaderImages.nodes[0].images

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        {/* <img src={item.sizes.src} alt={item.title} /> */}
        <BackgroundContainer
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(7, 26, 24, 0.6), rgba(0, 10, 10, 0.4), rgba(59, 22, 0, 0.5)), url(https:" +
              item.sizes.src +
              ")",
          }}
        ></BackgroundContainer>
      </CarouselItem>
    )
  })

  return (
    <Fragment>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </Fragment>
  )
}

export default Header
