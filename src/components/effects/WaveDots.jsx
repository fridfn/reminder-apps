import React from 'react';
import styled from 'styled-components';


const WaveDots = () => {
  return (
    <StyledWrapper>
     <div className='container-loader'>
      <div className="loader">
        <div className="loader__balls">
          <div className="loader__balls__group">
            <div className="ball item1" />
            <div className="ball item1" />
            <div className="ball item1" />
          </div>
          <div className="loader__balls__group">
            <div className="ball item2" />
            <div className="ball item2" />
            <div className="ball item2" />
          </div>
          <div className="loader__balls__group">
            <div className="ball item3" />
            <div className="ball item3" />
            <div className="ball item3" />
          </div>
        </div>
      </div>
     </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div `
  .loader__balls {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    transform: scale(.5);
  }
  .loader__balls__group {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    height: auto;
    width: 20px;
  }
  .ball {
    height: 15px;
    width: 15px;
    border-radius: 15px;
    position: absolute;
    transform-origin: bottom;
  }
  /* ANIMATION BALL 1*/
  .loader__balls__group :nth-child(1) {
    background-color: #8893ba;
    animation-name: jumpinBallAnimation1;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }
  @keyframes jumpinBallAnimation1 {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    10% {
      transform: translateY(0) scale(1.3, 0.8);
    }
    11% {
      transform: translateY(0) scale(0.7, 1.2);
      animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
    }
    39% {
      transform: translateY(-20px) scale(1);
      animation-timing-function: cubic-bezier(0, 0, 0.5, 1);
    }
    40% {
      transform: translateY(-20px) scale(1);
    }
    41% {
      transform: translateY(-20px) scale(1);
      animation-timing-function: cubic-bezier(1, 0, 1, 0);
    }
    69% {
      transform: translateY(0px) scale(1, 1);
      animation-timing-function: cubic-bezier(1, 0, 1, 0);
    }
    70% {
      transform: translateY(0) scale(1.5, 0.4);
    }
    80% {
      transform: translateY(0) scale(0.8, 1.2);
    }
    90% {
      transform: translateY(0) scale(1.1, 0.8);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }

  /* ANIMATION BALL 2*/
  .loader__balls__group :nth-child(2) {
    background-color: #96a0c2;
    animation-name: jumpinBallAnimation2;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }
  @keyframes jumpinBallAnimation2 {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    10% {
      transform: translateY(0) scale(1.3, 0.8);
    }
    11% {
      transform: translateY(0) scale(0.7, 1.2);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    39% {
      transform: translateY(-20px) scale(1);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    40% {
      transform: translateY(-20px) scale(1);
    }
    41% {
      transform: translateY(-20px) scale(1);
      animation-timing-function: cubic-bezier(1, 0, 1, 0.5);
    }
    69% {
      transform: translateY(0px) scale(1, 1);
      animation-timing-function: cubic-bezier(1, 0, 1, 0.5);
    }
    70% {
      transform: translateY(0) scale(1.5, 0.4);
    }
    80% {
      transform: translateY(0) scale(0.8, 1.2);
    }
    90% {
      transform: translateY(0) scale(1.1, 0.8);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }

  /* ANIMATION BALL 3*/
  .loader__balls__group :nth-child(3) {
    background-color: #7787BE;
    animation-name: jumpinBallAnimation3;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
  }
  @keyframes jumpinBallAnimation3 {
    0% {
      transform: translateY(0) scale(1, 1);
    }
    10% {
      transform: translateY(0) scale(1.3, 0.8);
    }
    11% {
      transform: translateY(0) scale(0.7, 1.2);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    39% {
      transform: translateY(-20px) scale(1);
      animation-timing-function: cubic-bezier(0, 1, 0.5, 1);
    }
    40% {
      transform: translateY(-20px) scale(1);
    }
    41% {
      transform: translateY(-20px) scale(1);
      animation-timing-function: cubic-bezier(1, 0, 1, 1);
    }
    69% {
      transform: translateY(0px) scale(1, 1);
      animation-timing-function: cubic-bezier(1, 0, 1, 1);
    }
    70% {
      transform: translateY(0) scale(1.5, 0.4);
    }
    80% {
      transform: translateY(0) scale(0.8, 1.2);
    }
    90% {
      transform: translateY(0) scale(1.1, 0.8);
    }
    100% {
      transform: translateY(0) scale(1, 1);
    }
  }
  .loader__balls__group .item1 {
    animation-delay: 100ms;
  }
  .loader__balls__group .item2 {
    animation-delay: 200ms;
  }
  .loader__balls__group .item3 {
    animation-delay: 300ms;
  }
`

export default WaveDots;