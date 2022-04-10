// @ts-nocheck
import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import AndroidIcon from '../assets/android-icon.svg';
import AppleIcon from '../assets/apple-icon.svg';
import FirebaseIcon from '../assets/firebase-icon.svg';
import GraphQlIcon from '../assets/graphql-icon.svg';
import MobxIcon from '../assets/mobx-icon.svg';
import NextIcon from '../assets/next-icon.svg';
import ReduxIcon from '../assets/redux-icon.svg';
import ReactIcon from '../assets/react-icon.svg';

const ThirdScreen = () => {

    const nodes = {

    };

    useEffect(()=>{
    },[])

    return <ThirdScreenContainer>
        <Cloud1/>
        <Cloud2/>
        <Cloud3/>
        <Cloud4/>
        <Cloud5/>
        <Body>
            <TechnologyStackText>Other technologies</TechnologyStackText>
            <TechnologiesContainer>
                <ReactContainer/>
            </TechnologiesContainer>
        </Body>
    </ThirdScreenContainer>
};

const Body = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Cloud = styled.div`
  width: 200px;
  height: 60px;
  background: #fff;

  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;

  position: relative;


  &:before, &:after{
    content: '';
    position: absolute;
    background: #fff;
    width: 100px;
    height: 80px;
    position: absolute;
    top: -15px;
    left: 10px;

    border-radius: 100px;
    -moz-border-radius: 100px;
    -webkit-border-radius: 100px;

    -webkit-transform: rotate(30deg);
    transform: rotate(30deg);
    -moz-transform: rotate(30deg);
  }
  &:after{
    width: 120px;
    height: 120px;
    top: -55px;
    left: auto;
    right: 15px;
  }
`;

const CloudKeyFrames = `
    @keyframes moveclouds {
     0% {margin-left: 1000px;}
     100% {margin-left: -1000px;}
    };
`;

const Cloud5 = styled(Cloud)`
  left: -150px;
  top: -150px;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.8; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 20s linear infinite;
  -moz-animation: moveclouds 20s linear infinite;
  -o-animation: moveclouds 20s linear infinite;

  ${CloudKeyFrames}
`;

const Cloud4 = styled(Cloud)`
  left: 470px;
  top: -250px;

  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.75; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 18s linear infinite;
  -moz-animation: moveclouds 18s linear infinite;
  -o-animation: moveclouds 18s linear infinite;

  ${CloudKeyFrames}
`;

const Cloud3 = styled(Cloud)`
  left: -250px;
  top: -200px;

  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.8; /*opacity proportional to the size*/

  -webkit-animation: moveclouds 20s linear infinite;
  -moz-animation: moveclouds 20s linear infinite;
  -o-animation: moveclouds 20s linear infinite;

  ${CloudKeyFrames}
`;

const Cloud2 = styled(Cloud)`
  left: 200px;

  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.6; /*opacity proportional to the size*/

  /*Speed will also be proportional to the size and opacity*/
  /*More the speed. Less the time in 's' = seconds*/
  -webkit-animation: moveclouds 25s linear infinite;
  -moz-animation: moveclouds 25s linear infinite;
  -o-animation: moveclouds 25s linear infinite;

  ${CloudKeyFrames}
`;

const Cloud1 = styled(Cloud)`
  -webkit-animation: moveclouds 15s linear infinite;
  -moz-animation: moveclouds 15s linear infinite;
  -o-animation: moveclouds 15s linear infinite;

  ${CloudKeyFrames}
`;

const ReactContainer = styled.div`
  position: absolute;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);

  ${CloudKeyFrames}
`;

const TechnologiesContainer = styled.div`
    position: relative;
`;

const TechnologyStackText = styled.h3`
  margin: 0;
  font-size: 24px;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const ThirdScreenContainer = styled.div`
  height: 100vh;
  background: #c9dbe9;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: -webkit-linear-gradient(top, #c9dbe9 0%, #fff 100%);
  background: -linear-gradient(top, #c9dbe9 0%, #fff 100%);
  background: -moz-linear-gradient(top, #c9dbe9 0%, #fff 100%);
`;


export default ThirdScreen