// @ts-nocheck
import React, {Suspense, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {useGLTF, OrbitControls, useAnimations} from '@react-three/drei'
import ScrollMagic from "scrollmagic";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


function Box(props: any) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()
    // Hold state for hovered and clicked events
    const [hovered, hover] = useState(false)
    const [clicked, click] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    // @ts-ignore
    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    // Return the view, these are regular Threejs elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={ref}
            scale={clicked ? 1.5 : 1}
            onClick={(event) => click(!clicked)}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
        </mesh>
    )
}
let controller = new ScrollMagic.Controller();
let scrollScene;

const Turtle = () => {
    const [clicked, click] = useState(false)
    const { nodes, materials, animations, scene} = useGLTF('/turtle7.gltf')
    const ref = useRef()
    const [hovered, hover] = useState(false)


    //useFrame((state, delta) => {
    //    ref.current.rotation.y += 0.01;
    //    ref.current.rotation.x += 0.01;
    //})
    //make it transparent
    /*scene.traverse( function( object ) {
        if ( object.isMesh ) {
            object.material.color.set( 0xfff );
            object.material.transparent = true;
            object.material.opacity = 0.5;
        }
    });*/
    const group = useRef()

    const { actions } = useAnimations(animations, group)


    useEffect( () => {
        controller = new ScrollMagic.Controller();

        scrollScene = new ScrollMagic.Scene({triggerElement: "#cralt-3d-trigger", duration: 200})
            .addTo(controller)
            .addIndicators() // add indicators (requires plugin)
            .on("update", function (e) {
                //$("#scrollDirection").text(e.target.controller().info("scrollDirection"));
            })
            .on("enter leave", function (e) {
                //$("#state").text(e.type == "enter" ? "inside" : "outside");
                Object.keys(actions).forEach((key) => actions[key] && actions[key]?.play && actions[key].play())
            })
            .on("start end", function (e) {
                //$("#lastHit").text(e.type == "start" ? "top" : "bottom");
            })
            .on("progress", function (e) {
                //$("#progress").text(e.progress.toFixed(3));
            });

        return;
        if(hovered){
            scene.traverse( function( object ) {
                if ( object.isMesh ) {
                    object.material.color.set( 0xfff );
                    object.material.transparent = true;
                    object.material.opacity = 0.5;
                }
            });
        } else {

            scene.traverse( function( object ) {
                if ( object.isMesh ) {
                    object.material.color.set( 0x02a09f );
                    object.material.transparent = false;
                    object.material.opacity = 1;
                }
            });
        }
    }, [hovered]);

    const onClick = () => {
        click(!clicked);
    }

    return <group ref={group}  dispose={null}>
        <primitive
            object={scene}
            onPointerOver={(event) => hover(true)}
            onPointerOut={(event) => hover(false)}
            scale={clicked ? 0.25:0.225}
            onClick={onClick}
            ref={ref}/>
    </group>
}

const SecondScreen = () => {

    /*
useEffect(()=>{
    controller = new ScrollMagic.Controller();

    scene = new ScrollMagic.Scene({triggerElement: "#cralt-3d-trigger", duration: window?.innerHeight/2})
        // animate color and top border in relation to scroll position
        //.setTween("#cralt", {rotation: 360}) // the tween durtion can be omitted and defaults to 1
        .setTween("#cralt-3d", {y: '-15%'}) // the tween durtion can be omitted and defaults to 1
        .addTo(controller);
    },[])*/

    return <SecondScreenContainer>
        <div id={'cralt-3d-trigger'}/>
        <Cralt3dContainer id={'cralt-3d'}>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Turtle/>
                </Suspense>
                <OrbitControls enableZoom={false} enablePan={false}
                />
                {/*
                               minPolarAngle={Math.PI / 3}
                               maxPolarAngle={Math.PI / 3}

            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
            */}
            </Canvas>
        </Cralt3dContainer>
    </SecondScreenContainer>
};

const Cralt3dContainer = styled.div`
  transform: translate(2.1%, -18%);
  height: 2100px;
`;

const SecondScreenContainer = styled.div`
  height:100vh;
  background-color: black;
  position: relative;
  overflow: hidden;
 `;


export default SecondScreen
