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
import ReactIcon from '../components/ReactIcon';

const TechnologiesRow = ({techs}) =>
    techs.map( (t,k) => <Technology key={k}>{t}</Technology>);

const Technology = styled.div`
  animation: fadein 2s ease-in alternate;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  };
`;

const SecondScreen = () => {

    return <SecondScreenContainer>
        <MovingTurtle>🐢</MovingTurtle>
        <TechnologyStackText>4+ years with React <Heart>❤️</Heart></TechnologyStackText>
        <TechnologiesContainer>
            <TopContainer>
                <TechnologiesRow
                    techs={[
                        <TechnologyImg src={ReduxIcon}/>,
                        <TechnologyImg src={NextIcon}/>,
                        <TechnologyImg src={MobxIcon}/>,
                        <TechnologyImg src={GraphQlIcon}/>
                    ]}
                />
            </TopContainer>
            <ReactContainer>
                <ReactIcon/>
            </ReactContainer>
            <BottomContainer>
                <TechnologiesRow
                    techs={[
                        <TechnologyImg src={AndroidIcon}/>,
                        <TechnologyImg src={AppleIcon}/>,
                        <TechnologyImg src={FirebaseIcon}/>
                    ]}
                />
            </BottomContainer>
        </TechnologiesContainer>
    </SecondScreenContainer>
};

const MovingTurtle = styled.div`
  position: absolute;
  animation: move-around 10s ease-in infinite;
  @keyframes move-around {
    0%   {top: 5vh;left:5vw;}
    25%  {top:5vh;left: 95vw}
    50%  {top:95vh;left: 95vw}
    75%  {top:95vh; left:5vw;}
    100%  {top:5vh; left:5vw;}
  };
`;

const TechnologyImg = styled.img`
  height: 100px;
`;

const TechnologiesContainer = styled.div`
  padding-bottom: 5%;
  flex-grow: 1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.7fr 1.6fr 0.7fr;
  gap: 0px 0px;
  grid-template-areas: 
    "top"
    "center"
    "bottom";
`;

const TopContainer = styled.div`
  grid-area: top;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const BottomContainer = styled.div`
  grid-area: bottom;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ReactContainer = styled.div`
  grid-area: center;
  display: flex; 
  justify-content: center;
  align-items: center;
`;

const TechnologyStackText = styled.h3`
  color: white;
  font-size: 24px;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Heart = styled.h3`
  margin: 0;
  margin-left: 10px;
  animation: fadein 1s ease-in alternate infinite;
  @keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
  };
`;

const SecondScreenContainer = styled.div`
  height:100vh;
  background-color: black;
  position: relative;
  display: flex;
  flex-direction: column;
 `;


export default SecondScreen