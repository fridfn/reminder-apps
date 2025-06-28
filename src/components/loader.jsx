import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
    <div className='container-loader'>
      <p className='loading'>Loading...</p>
      <svg className="heart" viewBox="-5 -5 278 56" version="1.1" id="svg5" xmlns="http://www.w3.org/2000/svg">
        <filter>
         <feGaussianBlur stdDeviation="1.6" />
        </filter>
        <g transform="translate(29.1 -127.42)" id="layer1">
          <path pathLength={1} d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36" id="line" />
        </g>
        <g transform="translate(29.1 -127.42)" id="layer2">
          <path pathLength={1} d="M-28.73 167.2c26.43 9.21 68.46-9.46 85.45-12.03 18.45-2.78 32.82 4.86 28.75 9.83-3.82 4.66-25.77-21.18-14.81-31.5 9.54-8.98 17.64 10.64 16.42 17.06-1.51-6.2 2.95-26.6 14.74-22.11 11.7 4.46-4.33 49.03-15.44 44.08-6.97-3.1 15.44-16.26 26.1-16 23.03.56 55.6 27.51 126.63 3.36" id="point" filter="url(#blur)" />
        </g>
      </svg>
      </div>
    </StyledWrapper>
  );
}

export const LoaderDots = () => {
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

const StyledWrapper = styled.div`
  .container-loader {
   inset: 0;
   z-index: 29;
   width: 100%;
   display: flex;
   height: 100%;
   position: absolute;
   align-items: center;
   justify-content: center;
  }
  .container-loader .loading {
   position: absolute;
   margin-left: 70px;
   margin-top: 75px;
   font-size: 25px;
   animation-delay: 2.5s;
   font-family: 'Birthstone', serif;
   animation: opacity 3s linear infinite;
  }
  .heart #line {
    fill: none;
    stroke: #FCFEF9;
    stroke-width: 1.8;
    stroke-linecap: butt;
    stroke-linejoin: round;
    stroke-miterlimit: 4;
    stroke-opacity: 1;
    stroke-dasharray: 1;
    stroke-dashoffset: 10;
    animation: dash 3s linear infinite;
  }
  .heart #point {
    fill: none;
    stroke: #FCFEF9;
    stroke-width: 5;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-opacity: 1;
    stroke-dashoffset: 1;
    stroke-miterlimit: 0.1;
    stroke-dasharray: 0.0001, 0.9999;
    animation: dash 3s linear infinite;
  }
  @keyframes opacity {
    0%, 80%, 100% {
      opacity: 0;
    }
    80% {
      opacity: .7;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes dash {
    0% {
      stroke-dashoffset: 1;
    }
    80% {
      stroke-dashoffset: 0;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
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
  }`;
  
export default Loader;
