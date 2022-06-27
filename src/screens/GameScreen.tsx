// @ts-nocheck
import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import Game from "../components/Game";

const GameScreen = () => {
    useEffect(()=>{
    },[])

    return <GameScreenContainer>
        <Game/>
    </GameScreenContainer>
};

const GameScreenContainer = styled.div`
  height: 100vh;
  position: relative;
`;

export default GameScreen