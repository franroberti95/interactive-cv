// @ts-nocheck
import React from 'react'
import styled from 'styled-components'

const TilesQuantity = 5;

const Tile = ({number}:{number:number}) =>
    <TileContainer number={number}>
    </TileContainer>

const TileContainer = styled.div`
  width: ${(window?.innerWidth/TilesQuantity)-3.5}px;
  height: ${(window?.innerHeight/TilesQuantity)}px;
  background-color: black;
  animation-name: close;
  animation-duration: ${ (props) => (props.number*0.1)+1 }s;
  transform-origin: top;
  transform: rotateX(90deg);
  @keyframes close {
      from {transform: rotateX(0);}
      to {transform: rotateX(90deg);}
    }
`;

const InitialAnimation = () =>
    <InitialAnimationContainer>
        {
            new Array(Math.pow(TilesQuantity,2)).fill(null).map( (_,i) => <Tile number={i} key={i}/>)
        }
    </InitialAnimationContainer>

const InitialAnimationContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  height:100%;
  width:100%;
`;

export default InitialAnimation