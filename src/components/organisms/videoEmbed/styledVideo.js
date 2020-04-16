import styled from '@emotion/styled'
import { Flex } from 'rebass'

export const VideoThumbnail = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: ${(props) => (props.display ? 'hidden' : 'visible')};
  transition: all 150ms linear 0s;
`

export const VideoWrapper = styled(Flex)`
  position: relative;
  padding-top: 56.25%;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0px 1.66035px 5.96162px rgba(0, 0, 0, 0.0539848), 0px 3.99006px 13.1948px rgba(0, 0, 0, 0.0745653),
    0px 7.51293px 22.6612px rgba(0, 0, 0, 0.090447), 0px 13.4018px 36.4944px rgba(0, 0, 0, 0.107839),
    0px 25.0666px 60.5163px rgba(0, 0, 0, 0.133801), 0px 60px 114px rgba(0, 0, 0, 0.21);

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  &:hover .play-button {
    transform: scale(1.1);
  }
`

export const VideoOverlay = styled.div`
  cursor: pointer;
  position: absolute;
  visibility: ${(props) => (props.display ? 'hidden' : 'visible')};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.9;
  z-index: 500;
  background: linear-gradient(270deg, rgba(155, 19, 19, 0.9) 0%, rgba(230, 105, 105, 0.6) 100%);
`

export const PlayButton = styled(Flex)`
  visibility: ${(props) => (props.display ? 'hidden' : 'visible')};
  position: absolute;
  z-index: 1000;
  background-color: #ffffff;
  opacity: 0.5;
  border-radius: 100%;
  transition: all 150ms linear 0s;
  margin: auto;
  top: 0;
  bottom: 0;
  cursor: pointer;
  height: 65px;

  svg {
    width: 26px;
    height: 26px;
  }

  @media screen and (min-width: 512px) {
    svg {
      width: 40px;
      height: 40px;
    }
  }
`
