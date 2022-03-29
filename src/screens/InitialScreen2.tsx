// @ts-nocheck
import React, {useEffect, useRef} from 'react';
import styled from "styled-components";
import ScrollMagic from 'scrollmagic';
import { gsap, TweenMax, TimelineMax } from "gsap";// Also works with TweenLite and TimelineLite
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import InitialAnimation from "../components/InitialAnimation";
import Cralt from '../components/Cralt';

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

const Right = () =>
    <RightContainer>
    </RightContainer>;

const Left = () =>
    <LeftContainer>
    </LeftContainer>;

const SideContainer = styled.div`
    flex-grow: 1;
  height: 100vh;

`;
const LeftContainer = styled(SideContainer)`
`;
const RightContainer = styled(SideContainer)`
`;

let controller = new ScrollMagic.Controller();
let scene;
const InitialScreen = () => {
    const meetCraltRefText = useRef(null);
    const underlineRef = useRef(null);
    const creativeDevRefText = useRef(null);
    useEffect(()=>{
        /*controller = new ScrollMagic.Controller();
        scene = new ScrollMagic.Scene({triggerElement: "#cralt-trigger-rotation", duration: window?.innerHeight/2})
            // animate color and top border in relation to scroll position
            //.setTween("#cralt", {rotation: 360}) // the tween durtion can be omitted and defaults to 1
            .setTween("#cralt", {rotateY: 180}) // the tween durtion can be omitted and defaults to 1
            .addTo(controller);
        */
        scene = new ScrollMagic.Scene({triggerElement: "#creative-dev", duration: Math.max(700,window?.innerHeight/2)})
            .setPin("#creative-dev")
            .addTo(controller);
        gsap.to(meetCraltRefText?.current, {delay: 3.5, opacity:1});
        gsap.to(creativeDevRefText?.current, {delay: 4, opacity:1, marginLeft:200});
        gsap.to(underlineRef?.current, {delay: 4, left: 0});

    },[])

    return <InitialScreenContainer>
        <TriggerCraltRotation id={'cralt-trigger-rotation'}/>
        <CraltContainer>
            <Cralt id='cralt' />
            <div id={'creative-dev'}>
                <MeetCraltTextContainer>
                    <MeetCraltText ref={meetCraltRefText}>Franco Roberti</MeetCraltText>
                    <Underline ref={underlineRef}/>
                </MeetCraltTextContainer>
                <MeetCraltText ref={creativeDevRefText}>Creative Dev</MeetCraltText>
            </div>
        </CraltContainer>
    </InitialScreenContainer>
};

const Underline = styled.div`
  height:2px;
  width:185px;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: -200%;
`;

const MeetCraltTextContainer = styled.div`
  width: 185px;
  margin-left: 10%;
  position: relative;
`;
const MeetCraltText = styled.h3`
  opacity:0;
  color: #fff;
  font-size: 24px;
  margin: 0;
  margin-top: 25px;
`;

const CraltContainer = styled.div`
    height: 100%;
`;

const TurtleImageSvg = styled.img`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translateY(-50%) translateX(50%);
`;

const TriggerCraltRotation = styled.div`
`;

const Invert = styled.div`
  /** make the content sticky **/
  position: sticky;

  /** blend the content with the contrast effect **/
  mix-blend-mode: difference;

  /** set the minimum height of the section **/
  min-height: 100vh;
`;

const InitialScreenContainer = styled.div`
  //background-color: midnightblue;
  height: 100vh;
  background-image: -webkit-linear-gradient(30deg, #013A6B 50%, #004E95 50%);

`;


export default InitialScreen