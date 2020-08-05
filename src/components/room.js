import React from "react"
import styled from "styled-components"
import SimpleCarousel from "../components/simpleCarousel"

const RoomContainer = styled.div`
  padding: 60px 0;
`

const Wrapper = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`

const TextContainer = styled.div`
  margin: 0 20px;

  @media (min-width: 768px) {
    max-width: 700px;
    margin-bottom: 60px;
  }
`

const Pretext = styled.p`
  font-size: 13px;
  font-weight: 600;
  color: #222222;
  letter-spacing: 1px;
  margin-bottom: 18px;
`

const SemiHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
  color: #0c302b;

  span {
    font-weight: 400;
    color: #254642;
  }
`

const Prices = styled.p`
  font-weight: 600;
  color: #222222;
`

const Room = ({ roomContent }) => {
  return (
    /************ Room Section ************/
    <RoomContainer>
      <Wrapper
        data-sal="slide-up"
        data-sal-easing="ease"
        data-sal-duration="800"
      >
        <TextContainer>
          <SemiHeader>
            {roomContent.headlinebold}
            <span> - {roomContent.headlinethin}</span>
          </SemiHeader>
          <Pretext>{roomContent.pretext}</Pretext>
          <p>{roomContent.text}</p>
          <Prices>{roomContent.prices}</Prices>
        </TextContainer>
      </Wrapper>

      <SimpleCarousel images={roomContent.images} />
    </RoomContainer>
  )
}

export default Room
