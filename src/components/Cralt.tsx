// @ts-nocheck
import React, { useEffect, useRef } from 'react'
import { gsap, TimelineMax } from "gsap";

const MAX_X_SPREAD = window?.innerWidth;
const MAX_Y_SPREAD = window?.innerHeight;

function randomIntFromInterval(min, max) { // min and max included
        return Math.floor(Math.random() * (max - min + 1) + min)
}

const RandomPositionRect = ({x= '0', y = '0', color, index}) => {
        const rectRef = useRef(null);

        const randomX = randomIntFromInterval(-MAX_X_SPREAD,MAX_X_SPREAD);
        const randomY = randomIntFromInterval(-MAX_Y_SPREAD,MAX_Y_SPREAD);

        const randomX2 = randomIntFromInterval(-20, 20);
        const randomY2 = randomIntFromInterval(-20, 20);
        const randomRotation = randomIntFromInterval(0, 360);
        useEffect( () => {
                const tl = new TimelineMax();
                tl.to(rectRef.current, {duration:0.5, rotateZ: randomRotation+'deg'})
                tl.to(rectRef.current, {duration: 1, x:x-randomX, y:y-randomY, rotateZ:0})
                tl.to(rectRef.current, {duration: 1, x:x-randomX+randomX2, y:y-randomY+randomY2})
                tl.to(rectRef.current, {duration: 1, x:x-randomX, y:y-randomY})
                tl.play();
        })
        {/*
                x={randomX}
                y={randomY}
            */}
        return <rect ref={rectRef}
                     x={randomX}
                     y={randomY}
                     width="6.81751"
                     height="6.80952"
                     fill={color}
        />;
}

const Cralt = () => {
        const leftLegRef = useRef(null);
        const rightLegRef = useRef(null);
        const topLegRef = useRef(null);
        const bottomLegRef = useRef(null);


        useEffect(() => {
                const leftTl = new TimelineMax();
                leftTl.to(leftLegRef?.current, {delay: 4.5, y: -5})
                leftTl.to(leftLegRef?.current, {y:0})
                leftTl.to(leftLegRef?.current, {y: -5})
                leftTl.to(leftLegRef?.current, {y:0})
                leftTl.play()

                const rightTl = new TimelineMax();
                rightTl.to(rightLegRef?.current, {delay: 4.5, y: 5})
                rightTl.to(rightLegRef?.current, {y:0})
                rightTl.to(rightLegRef?.current, {y: 5})
                rightTl.to(rightLegRef?.current, {y:0})
                rightTl.play()

                const topTl = new TimelineMax();
                topTl.to(topLegRef?.current, {delay: 4.5, x: 5})
                topTl.to(topLegRef?.current, {x:0})
                topTl.to(topLegRef?.current, {x: 5})
                topTl.to(topLegRef?.current, {x:0})
                topTl.play()

                const bottomTl = new TimelineMax();
                bottomTl.to(bottomLegRef?.current, {delay: 4.5, x: -5})
                bottomTl.to(bottomLegRef?.current, {x:0})
                bottomTl.to(bottomLegRef?.current, {x: -5})
                bottomTl.to(bottomLegRef?.current, {x:0})
                bottomTl.play()

        } ,[])

        return <svg width="100%" height="90%" viewBox="0 -50 157 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute'}}>
        <RandomPositionRect x={"6.8008"} y={"20.4213"} color={"#8FD594"}/>
        <RandomPositionRect x={"6.8008"} y={"13.619"} color={"#8FD594"}/>
        <RandomPositionRect y={"20.4213"} x={'0'} color={"#8FD594"}/>
        <RandomPositionRect x={'0'} y={"27.2381"} color={"#8FD594"}/>
        <RandomPositionRect x="13.619" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="20.4286" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="27.2381" y="13.619" width="6.81751" height="6.80952" color="#6AAA72"/>
        <RandomPositionRect x="34.0476" y="20.4286" width="6.81751" height="6.80952" color="#6AAA72"/>
        <RandomPositionRect x="27.2381" y="20.4286" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="34.0476" y="27.2381" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="34.0476" y="34.0476" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="6.8008" y="27.2308" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="6.8008" y="34.0403" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="20.4356" y="27.2308" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="20.4356" y="34.0403" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="20.4356" y="40.8499" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="27.2531" y="40.8499" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="27.2531" y="47.6667" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="34.0705" y="47.6667" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="34.0705" y="40.8571" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="40.8867" y="34.0476" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="40.8867" y="40.8644" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="40.8867" y="47.674" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="40.8571" y="54.4835" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="34.0476" y="54.4835" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="40.8571" y="61.2857" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="34.0476" y="61.2857" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="40.8571" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="40.8867" y="27.2381" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="47.6667" y="27.2454" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="34.0549" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.7041" y="40.8644" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.7041" y="47.674" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="54.4835" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4841" y="34.0549" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="40.8644" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.5215" y="47.674" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="54.4835" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4841" y="27.2454" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="61.3003" y="27.2527" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="68.0952" y="102.143" width="6.81751" height="6.80952" color="#8FD594"/>

                //Left leg
                <g ref={leftLegRef}>
                        <RandomPositionRect y="95.3333" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="6.80952" y="102.143" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect y="88.5238" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect y="81.7143" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="6.80952" y="61.2857" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="13.619" y="61.2857" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="13.619" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="13.619" y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="6.80952" y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="6.80952" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="6.80952" y="81.7143" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="6.80952" y="88.5238" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="20.4286" y="61.2857" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="20.4286" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="20.4286" y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="13.619" y="81.7143" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="13.619" y="88.5238" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="13.619" y="95.3333" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="6.80952" y="95.3333" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="13.619" y="102.143" width="6.81751" height="6.80952" color="#8FD594"/>
                </g>
                    //Bottom Leg
                <g ref={bottomLegRef}>

                        <RandomPositionRect x="74.9048" y="108.952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="74.9048" y="115.762" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="74.9048" y="122.571" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="81.7143" y="129.381" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="136.19" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="95.3333" y="136.19" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="102.143" y="136.19" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="102.143" y="129.381" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="102.143" y="122.571" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="95.3333" y="115.762" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="108.952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="81.7143" y="108.952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="81.7143" y="115.762" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="115.762" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="122.571" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="95.3333" y="122.571" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="129.381" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="95.3333" y="129.381" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="81.7143" y="122.571" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="74.9048" y="102.143" width="6.81751" height="6.80952" color="#8FD594"/>
                </g>
        // Right leg
                <g ref={rightLegRef}>
                        <RandomPositionRect x="81.7143" y="102.143" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="122.571" y="54.4835" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="129.381" y="54.4835" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="129.381" y="61.2857" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="129.381" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="136.19" y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="143" y="81.7143" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="149.81" y="81.7143" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="149.81" y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="143" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="136.19" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="143" y="74.9048" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="136.19" y="61.2857" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="129.381" y="54.4835" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="136.19" y="54.4835" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="143" y="61.2857" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="149.81" y="68.0952" width="6.81751" height="6.80952" color="#8FD594"/>
                </g>
        //Top leg
                <g ref={topLegRef}>
                        <RandomPositionRect x="61.3377" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="61.3377" y="6.80951" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="61.3377" y="0" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="68.0952" y="20.4286" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="68.0952" y="13.619" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="68.0952" y="6.80951" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="68.0952" y={'0'} width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="74.9048" y={'0'} width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="81.7143" y={'0'} width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="6.80951" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="88.5238" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="81.7143" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="74.9048" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="74.9048" y="20.4286" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="61.3377" y="20.4286" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="54.5215" y="20.4286" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="54.5215" y="13.619" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="54.5215" y="6.80951" width="6.81751" height="6.80952" color="#8FD594"/>
                        <RandomPositionRect x="74.9048" y="6.80951" width="6.81751" height="6.80952" color="#6AAA72"/>
                        <RandomPositionRect x="81.7143" y="6.80951" width="6.81751" height="6.80952" color="#8FD594"/>
                </g>

    <RandomPositionRect x="61.3003" y="34.0622" width="6.81751" height="6.80952" color="#02A09F"/>
    <RandomPositionRect x="61.2857" y="40.8717" width="6.81751" height="6.80952" color="#04B5B3"/>
    <RandomPositionRect x="61.3377" y="47.6812" width="6.81751" height="6.80952" color="#04B5B3"/>
    <RandomPositionRect x="61.2857" y="54.4907" width="6.81751" height="6.80952" color="#02A09F"/>
    <RandomPositionRect x="61.2857" y="61.293" width="6.81751" height="6.80952" color="#02A09F"/>
    <RandomPositionRect x="61.2857" y="68.1025" width="6.81751" height="6.80952" color="#04B5B3"/>
    <RandomPositionRect x="61.2857" y="74.912" width="6.81751" height="6.80952" color="#04B5B3"/>
    <RandomPositionRect x="61.2857" y="81.7216" width="6.81751" height="6.80952" color="#02A09F"/>
    <RandomPositionRect x="61.2857" y="88.5311" width="6.81751" height="6.80952" color="#02A09F"/>
    <RandomPositionRect x="68.0952" y="27.2454" width="6.81751" height="6.80952" color="#02A09F"/>
         <RandomPositionRect x="68.0952" y="34.0549" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="68.0952" y="40.8717" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="68.0952" y="47.6812" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="68.0952" y="54.4907" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="68.0952" y="61.293" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="68.0952" y="68.1025" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="68.0952" y="74.912" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="68.0952" y="81.7216" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="68.0952" y="88.5311" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="74.9048" y="27.2454" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.9048" y="34.0549" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.9048" y="40.8717" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="74.9048" y="47.6812" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="74.9048" y="54.4907" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.9048" y="61.293" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.9048" y="68.1025" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="74.9048" y="74.912" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.9048" y="81.7216" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.9048" y="88.5311" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.7143" y="27.2454" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.7143" y="34.0622" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.7143" y="40.879" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="81.7143" y="47.6885" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="81.7143" y="54.498" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.7143" y="61.3003" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.7143" y="68.1098" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="81.7143" y="74.9193" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="81.7143" y="81.7288" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.7143" y="88.5384" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="34.0476" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="40.8644" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="47.674" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="54.4835" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="95.3333" y="54.4835" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="54.4835" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="108.952" y="54.4835" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="108.952" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="115.762" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="68.0952" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="108.952" y="68.0952" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="115.762" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="74.9048" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="108.952" y="74.9048" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="115.762" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="108.952" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="115.762" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="88.5238" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="88.5238" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="88.5238" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="108.952" y="88.5238" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="115.762" y="88.5238" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.2905" y="34.0476" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.108" y="40.8644" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="95.3333" y="40.8644" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="47.674" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="47.674" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="108.925" y="47.6667" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="115.743" y="54.4762" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="122.56" y="61.2784" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="122.56" y="68.088" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="122.56" y="74.8975" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="122.56" y="81.707" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="108.925" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.108" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.2905" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.4743" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="81.6569" y="95.326" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="81.6569" y="102.143" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="88.5238" y="102.143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="102.143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="95.3333" y="102.143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="102.143" y="102.143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="74.8408" y="95.326" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="74.8408" y="102.143" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="68.0952" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="68.0952" y="102.143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="61.2857" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="95.326" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="54.4762" y="88.5238" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="88.5238" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="47.6667" y="81.7143" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="40.8571" y="81.7143" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="40.8571" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="34.0476" y="74.9048" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="34.0476" y="68.0952" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="27.2381" y="68.0952" width="6.81751" height="6.80952" color="#02A09F"/>
        <RandomPositionRect x="27.2381" y="61.2857" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="27.2381" y="54.4835" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="115.743" y="47.6667" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="88.5238" y="27.2381" width="6.81751" height="6.80952" color="#04B5B3"/>
        <RandomPositionRect x="20.4356" y="20.4213" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="13.6182" y="20.4213" width="6.81751" height="6.80952" color="#324848"/>
        <RandomPositionRect x="13.6182" y="27.2308" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="13.6182" y="34.0403" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="13.6182" y="40.8499" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="27.2531" y="27.2308" width="6.81751" height="6.80952" color="#8FD594"/>
        <RandomPositionRect x="27.2531" y="34.0403" width="6.81751" height="6.80952" color="#8FD594"/>
    </svg>
};

export default Cralt