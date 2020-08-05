import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const FooterContainer = styled.footer`
  padding: 4em 1em;
  background: #222;
  color: #fff;
  text-align: center;
  position: absolute;
  width: 100%;

  h3 {
    font-size: 24px;
    margin-bottom: 24px;
    color: #eee;
  }

  p {
    font-size: 12px;
    margin-bottom: 5px;
    color: #bbb;
  }

  a {
    font-size: 12px;
    color: #eee;
  }
`

const Row = styled.div`
  display: flex;
  flex-direction: column;

  &.footer-border {
    border-bottom: 1px solid #444;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 700px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 1260px;
    padding: 0 20px;
  }
`

const Column = styled.div`
  margin-bottom: 50px;

  @media (min-width: 768px) {
    width: 30%;
    text-align: left;

    &:nth-child(3) {
      text-align: center;
    }
  }
`

const FooterMark = styled.h3`
  margin-top: 20px;
  font-size: 26px !important;
  font-weight: 800;

  color: #aaa !important;

  @media (min-width: 768px) {
    font-size: 36px !important;
    letter-spacing: 2px;
  }
`

const IconContainer = styled.div`
  .gatsby-image-wrapper {
    margin: 0 10px;
  }
`

const tripadvisor =
  "https://www.tripadvisor.com/Hotel_Review-g608486-d1751855-Reviews-Villa_Marene_Bali-Kerobokan_North_Kuta_Bali.html"
const agoda =
  "https://www.agoda.com/en-gb/bali-villa-marene/hotel/bali-id.html?cid=-218"
const traveloka =
  "https://www.traveloka.com/id-id/hotel/indonesia/bali-villa-marene-9000000291687"

const Footer = props => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      facebookIcon: file(relativePath: { eq: "facebook.png" }) {
        childImageSharp {
          fixed(width: 30, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      instagramIcon: file(relativePath: { eq: "instagram.png" }) {
        childImageSharp {
          fixed(width: 30, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <FooterContainer>
      <Row className="footer-border">
        <Column>
          <h3>Contact</h3>
          <p>
            <a href={"mailto:abalivillamarene@hotmail.com"}>
              abalivillamarene@hotmail.com
            </a>
          </p>
          <p>
            <a href={"tel:+6281338286581"}>+6281338286581</a>
          </p>
          <p>
            Jl. Tegal Cupek II, Kerobokan, Kec. Kuta Utara, Kabupaten Badung,
            Bali 80361, Indonesia
          </p>
        </Column>
        <Column>
          <h3>Booking</h3>
          <p>
            <a href={agoda} target="_blank" rel="noopener noreferrer">
              AGODA Booking
            </a>
          </p>
          <p>
            <a href={tripadvisor} target="_blank" rel="noopener noreferrer">
              TRIPADVISOR Booking
            </a>
          </p>
          <p>
            <a href={traveloka} target="_blank" rel="noopener noreferrer">
              TRAVELOKA Booking
            </a>
          </p>
        </Column>

        <Column>
          <h3>Socials</h3>
          <IconContainer>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/VillaMareneBali/"
            >
              <Img
                fixed={data.facebookIcon.childImageSharp.fixed}
                alt="facebook icon"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/balivillamarene/?hl=en"
            >
              <Img
                fixed={data.instagramIcon.childImageSharp.fixed}
                alt="instagram icon"
              />
            </a>
          </IconContainer>
        </Column>
      </Row>
      <Row>
        <FooterMark>VILLA MARENE</FooterMark>
      </Row>
    </FooterContainer>
  )
}

export default Footer
