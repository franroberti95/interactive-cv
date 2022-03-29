// @ts-nocheck
import React, {Suspense, useRef, useState} from 'react'
import styled from "styled-components";
import { useFrame,Canvas  } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

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

const Turtle = () => {
    const [clicked, click] = useState(false)
    const {scene} = useGLTF('/turtle.gltf')
    const ref = useRef()

    useFrame((state, delta) => (ref.current.rotation.x += 0.01))
    //make it transparent
    scene.traverse( function( object ) {
        if ( object.isMesh ) {
            object.material.color.set( 0xfff );
            object.material.transparent = true;
            object.material.opacity = 0.5;
        }
    });

    const onClick = () => {
        click(!clicked);
    }

    return  <primitive
        object={scene}
        scale={clicked ? 5.5 : 4}
        onClick={onClick}
        ref={ref}/>
}

const TurtleOverlay = () =>
    <TurtleOverlayContainer>
        <Canvas style={canvasStyle}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
                <Turtle/>
            </Suspense>
        </Canvas>
    </TurtleOverlayContainer>;

const Introduction = () =>
    <div>
        <InitialTextsContainer>
            <HiText>Hi</HiText>
            <IntermittentText>!</IntermittentText>
        </InitialTextsContainer>
    </div>;

const InitialTextsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
  margin-left: 100px;
`;
const HiText = styled.h1`
`;
const IntermittentText  = styled(HiText)`
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  @keyframes fadeIn {
    from {opacity: 0.2;}
    to {opacity: 1;}
  }
`;

const InitialScreen = () =>{
    return <InitialScreenContainer>
        <Introduction/>
        <TurtleOverlay/>
    </InitialScreenContainer>
};

const canvasStyle = {
    width: 150,
    height: 150
};

const TurtleOverlayContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
const InitialScreenContainer = styled.div`
`;


export default InitialScreen