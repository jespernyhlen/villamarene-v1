import React, { Fragment } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Img from "gatsby-image"

const HeaderThin = styled.span`
  font-weight: 400;
`

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
`

const ArticleContainer = styled.div`
  position: relative;
  margin: 0 0 60px;

  @media (min-width: 768px) {
    margin: 0 0 120px;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  p,
  h2,
  a {
    margin-left: 20px;
    margin-right: 20px;
  }

  .order-contain {
    &:nth-child(1) {
      order: 2;
    }
    &:nth-child(2) {
      order: 1;
    }
    &:nth-child(3) {
      order: 3;
    }
  }

  @media (min-width: 768px) {
    &.article-desktop {
      display: flex;
      flex-direction: row;
      margin-bottom: 120px;
      max-width: 1260px;
      margin: 0 auto;

      &.reverse {
        flex-direction: row-reverse;
      }

      & div:nth-child(1),
      & div:nth-child(2) {
        width: 50%;
        margin: auto 0;
      }
    }

    &.article-mobile {
      display: none;
    }
  }

  @media (max-width: 768px) {
    &.article-desktop {
      display: none;
    }

    &.article-mobile {
      display: flex;
    }
  }

  @media (min-width: 1024px) {
    &.article-desktop {
      & .mr-left {
        margin-left: 30px !important;
      }

      & .mr-right {
        margin-right: 30px !important;
      }
    }
  }
`

const ArticleText = styled.p`
  margin-top: 20px;
`

const LinkTag = styled(Link)`
  color: #ed4c5c;
`

const Article = ({ pageContent, imgLeft }) => {
  let TextContent = (
    <div
      data-sal="slide-up"
      data-sal-easing="ease"
      data-sal-duration="800"
      key={"textdesktop"}
      className={imgLeft ? "mr-left" : "mr-right"}
    >
      <Pretext>{pageContent.pretext}</Pretext>
      <SemiHeader>
        {pageContent.headlineBold + " "}
        <HeaderThin>{pageContent.headlineThin}</HeaderThin>
      </SemiHeader>
      <ArticleText>{pageContent.text}</ArticleText>
      <LinkTag to={"/rooms"}>Read More {">"}</LinkTag>
    </div>
  )

  let TextContentMobile = (
    <Fragment key={"fragmentkey"}>
      <div className="order-contain">
        <Pretext>{pageContent.pretext}</Pretext>
        <SemiHeader>
          {pageContent.headlineBold + " "}
          <HeaderThin>{pageContent.headlineThin}</HeaderThin>
        </SemiHeader>
      </div>
      <div className="order-contain">
        <ArticleText>{pageContent.text}</ArticleText>
        <LinkTag to={"/rooms"}>Read More {">"}</LinkTag>
      </div>
    </Fragment>
  )

  let ArticleImage = (
    <Img
      className="order-contain"
      key={"imagekey"}
      fluid={pageContent.image.fluid}
    />
  )

  return (
    /************ Article Section ************/
    <ArticleContainer>
      <FlexContainer
        className={imgLeft ? "reverse article-desktop" : " article-desktop"}
      >
        {imgLeft ? [TextContent, ArticleImage] : [ArticleImage, TextContent]}
      </FlexContainer>
      <FlexContainer className="article-mobile">
        {[ArticleImage, TextContentMobile]}
      </FlexContainer>
    </ArticleContainer>
  )
}

export default Article
